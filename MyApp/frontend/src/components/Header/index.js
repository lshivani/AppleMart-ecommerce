import {Link} from 'react-router-dom'
import './index.css'
import Cookies from 'js-cookie'
import { useNavigate} from 'react-router-dom'
//import axios from 'axios'
//import { useState } from 'react'

const Header = () => {
  //const [count,setCount] = useState(0)
  const history = useNavigate()
  const onClickLogout=()=>{
    Cookies.remove('jwt_token')
    localStorage.clear()
    history('/',{ replace: true })
  }
    
  
  return(
  <nav className="nav-header">
    <div className="nav-content">
      
      <ul className="nav-menu">
        <li>
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            Cart
            
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-desktop-btn" onClick={onClickLogout}>
        Logout
      </button>
      <button type="button" className="logout-mobile-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="logout icon"
          className="logout-icon"
        />
      </button>
    </div>
  </nav>
)
}
export default Header
