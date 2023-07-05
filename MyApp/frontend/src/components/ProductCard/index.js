import './index.css'
//import CartContext from '../../context/CartContext'
import React ,{ Component  } from 'react'
import axios from 'axios';

class ProductCard extends Component{



  handleAddToCart = () => {
    console.log(this.props)
    const {productData} = this.props
    let userDetails = JSON.parse(localStorage.getItem('userId'));
    

    axios.post('http://localhost:8081/addToCart',{'id':productData.id,'quantity':1,'userId':userDetails})
    .then(res=>{console.log(res.data)

    })
  };



  render(){
    const {productData} = this.props
    //const {id,title, brand, imageUrl, rating, price} = productData
    
     
    return(
    
      <li className="product-item">
        <img src={productData.imageurl} alt="product" className="thumbnail" />
        <h1 className="title">{productData.title}</h1>
        <div className="rating-container">
            <p className="rating">{productData.rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        {/* <p className="brand">by {productData.brand}</p> */}
        
        <div className="product-details">
          <p className="price">Rs {productData.price}/-</p><br/>
          
          <button className='addtocartBtn' onClick={this.handleAddToCart}>ADD TO CART</button>
        </div>
      </li>
    )
  }
}
//
  


export default ProductCard
