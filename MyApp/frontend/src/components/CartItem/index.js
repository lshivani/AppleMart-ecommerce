import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

//import CartContext from '../../context/CartContext'

import './index.css'
//import { Component } from 'react'
import axios from 'axios'
//import axios from 'axios'

const CartItem = props=> {

 const onDeleteCartItem = (id) => {
    //console.log('clicked')
    axios.post('/deleteCartItme', {'id':id,'userId':localStorage.getItem('userId')})
    .then(res=>{getAddToCardData()})
      //console.log(res)
    
  }

    const {cartItemDetails,getAddToCardData} = props
    //console.log(cartItemDetails)
    const {id, title, brand, quantity, price, imageUrl} = cartItemDetails
    //alert(cartItemDetails)

    //const [imageUrl,title,brand,quantity,price] = this.addToCartList
      return(
        <>
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <button type="button" className="quantity-controller-button">
                <BsDashSquare color="#52606D" size={12} />
              </button>
              <p className="cart-quantity">{parseInt(quantity)}</p>
              <button type="button" className="quantity-controller-button">
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>
            <div className="total-price-delete-container">
              <p className="cart-total-price">Rs {price * quantity}/-</p>
              <button
                className="remove-button"
                type="button"
                onClick={onDeleteCartItem(id)}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onDeleteCartItem(id)}
            
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
        </>
      )
  }
 

export default CartItem
