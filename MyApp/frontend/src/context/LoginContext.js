import React, { createContext, useState } from 'react';

// Create a new context
const LoginContext = createContext();

// Create a provider component for the context
export const LoginContextProvider = ({ children }) => {
  const [loginId, setLoginId] = useState('');

  // Update the loginId value
  const updateLoginId = (id) => {
    setLoginId(id);
  };

  // Provide the loginId value and the updateLoginId function to the children components
  return (
    <LoginContext.Provider value={{ loginId, updateLoginId }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
