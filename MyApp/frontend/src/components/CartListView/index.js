import { Component } from 'react'
//import CartItem from '../CartItem'

import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
 

import './index.css'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'
import CheckOut from '../CheckOut'



class CartListView extends Component {
  state = {addToCartList:[],dispalyCheckout:true
    ,price:0,emptyCart:true}


  onCheckout = () =>{
    this.setState(prevState=>{
      return {dispalyCheckout: !prevState.dispalyCheckout}
    })
    //this.setState({price:sum,dispalyCheckout:false})
    
   
  }

  onDeleteCartItem = (id) => {

    axios.post('/deleteCartItme', {'id':parseInt(id),'userId':localStorage.getItem('userId')})
    .then(()=>{
      //console.log(res)
      //this.getAddToCardData()
      
    })
    
      let filteredArray = this.state.addToCartList.filter(item => item.id !== id)

      this.setState({addToCartList: filteredArray});
    
  }

  onDecrementCartItem = (id,quant) => {
    if(quant===1){
      this.onDeleteCartItem(id)
    }
    else{
      console.log(typeof(quant))
      quant= quant-1
    axios.post('/decrementCartItme', {'id':parseInt(id),'quantity':quant,'userId':localStorage.getItem('userId')})
    .then(()=>{
      this.getAddToCardData()
    })
    
    }
    
  }

  onIncremanetCartItem = (id,quant) => {
    
    console.log(typeof(quant))
    quant= quant+1
    axios.post('/incrementCartItme', {'id':parseInt(id),'quantity':quant,'userId':localStorage.getItem('userId')})
    .then(res=>{
      this.getAddToCardData()
    })
    
  }

  componentDidMount(){
    this.getAddToCardData()
  }

  getAddToCardData(){
    let userDetails = JSON.parse(localStorage.getItem('userId'));
    console.log(userDetails)
    axios.post('http://localhost:8081/getCartList',{'userId':userDetails})
    .then(res=>{console.log(res.data)
      //let userDetails = JSON.parse(localStorage.getItem('userId'));
      //console.log(userDetails)
      if(res.data[0]!==undefined){

      this.setState({addToCartList:res.data})
      }

    })

  }
  render(){
    let sum =0
    const {addToCartList,dispalyCheckout} = this.state
    //console.log(addToCartList)
    return(
      
      <>
      
      {addToCartList.length !== 0 &&
      <>
      <h1 className="cart-heading">My Cart</h1>
      <ul className="cart-list">
        {addToCartList.map(eachCartItem => {
          sum=sum+(eachCartItem.price * eachCartItem.quantity)
          return(
          //<CartItem key={eachCartItem.id} cartItemDetails={eachCartItem}  getAddToCardData={this.getAddToCardData} />
            <li className="cart-item" key={eachCartItem.id}>
              <img className="cart-product-image" src={eachCartItem.imageUrl} alt={eachCartItem.title} />
              <div className="cart-item-details-container">
                <div className="cart-product-title-brand-container">
                  <p className="cart-product-title">{eachCartItem.title}</p>
                  <p className="cart-product-brand">by {eachCartItem.brand}</p>
                </div>
                <div className="cart-quantity-container">
                  <button type="button" className="quantity-controller-button" onClick={() =>this.onDecrementCartItem(eachCartItem.id,parseInt(eachCartItem.quantity))}>
                    <BsDashSquare color="#52606D" size={12} />
                  </button>
                  <p className="cart-quantity">{parseInt(eachCartItem.quantity)}</p>
                  <button type="button" className="quantity-controller-button" onClick={() =>this.onIncremanetCartItem(eachCartItem.id,parseInt(eachCartItem.quantity))}>
                    <BsPlusSquare color="#52606D" size={12} />
                  </button>
                </div>
                <div className="total-price-delete-container">
                  <p className="cart-total-price">Rs {eachCartItem.price * eachCartItem.quantity}/-</p>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={() =>this.onDeleteCartItem(eachCartItem.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <button
                className="delete-button"
                type="button"
                onClick={() =>this.onDeleteCartItem(eachCartItem.id)}
                
              >
                <AiFillCloseCircle color="#616E7C" size={20} />
              </button>
            </li>
            )}
          
            )}
            
        <div class="order-checkout">
            <p>Order Summary</p>
            <span class="item-count">No. of Items: {addToCartList.length}</span>
            <span class="total-price">Total Price: Rs {sum}/-</span>
            <Link to='/checkout'>
            <button class="checkout-button" >Checkout</button>
            </Link>
        </div>
      </ul>
    </>
  }
  
  

  {!addToCartList.length &&

<div className="cart-empty-view-container">
<img
  src="emptycart.png"
  className="cart-empty-image"
  alt="cart empty"
/>
<h1 className="cart-empty-heading">Your Cart Is Empty</h1>

<Link to="/products">
  <button type="button" className="shop-now-btn">
    Shop Now
  </button>
</Link>
</div>
  
  }
  </>
    
    )
  }
}

export default CartListView

