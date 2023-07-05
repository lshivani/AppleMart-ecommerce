import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import Header from '../Header'
import { Link } from 'react-router-dom'

class Payment extends Component {
    state = {paymentOpt:'',price:'',donePayment:false}

    componentDidMount(){
        this.getPrice()
    }
    
    getPrice=()=>{
        axios.post("http://localhost:8081/getPrice",{'userId':localStorage.getItem('userId')})
        .then(res=>{console.log(res)
            this.setState({price:res.data})
        })
    }

    onSubmitPayment = (e) =>{
        e.preventDefault()
        const {paymentOpt} = this.state
        if(paymentOpt==='cod'){
            axios.post("http://localhost:8081/removeallCartItme",{'userId':localStorage.getItem('userId')})
            .then(()=>{})
            this.setState({donePayment:true})
        }

        console.log(paymentOpt)
    }

    render(){
        const {price,donePayment} = this.state
  return (
    <> 
    <Header />
    {!donePayment &&   
    <>    
        <div className='head'>
            <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            />
        </div>
        <div className='wholebody' >
            <div className="payment-container">
                <form onSubmit={this.onSubmitPayment}>
                    <div className="title">
                        <h4><span style={{color:" green"}}>Select a Payment method</span></h4>
                    </div>
                    <input type="radio" name="payment" id="upi" onClick={()=>{this.setState({paymentOpt:'upi'})}}  />
                    <input type="radio" name="payment" id="cards" onClick={()=>{this.setState({paymentOpt:'cards'})}}  /> 
                    <input type="radio" name="payment" id="net" onClick={()=>{this.setState({paymentOpt:'net'})}}  />
                    <input type="radio" name="payment" id="cod" onClick={()=>{this.setState({paymentOpt:'cod'})}}  />
                    <div className="category">
                 


                        <label htmlFor="cards" className="cardsMethod">
                    <div className="imgName">
                        <div className="imgContainer cards">
                        <img src="card.png" alt="cards"/>
                        </div>
                        <span className="name">Credit / Debit / ATM Card</span>
                    </div>
                    <span className="check"><i className="fa-solid fa-circle-check" style={{color:" #6064b6"}}></i></span>
                    </label>


                   


                        <label htmlFor="cod" className="codMethod">
                    <div className="imgName">
                        <div className="imgContainer cod">
                        <img src="cash.png" alt="cod" />
                        </div>
                        <span className="name">Cash On Delivery</span>
                    </div>
                    <span className="check"><i className="fa-solid fa-circle-check" style={{color:" #6064b6"}}></i></span>
                    </label>
                    </div>
                    <div>
                
            </div>
            
            <h4 style={{marginTop:"0"}}>Total Amount: Rs {price}/-</h4>
            <button className='submitBtn'>Place Order</button>
                </form>
            </div>
        
            </div>
    </>
    }
    
    {donePayment &&

    <div class='view'>
    
       <div class="wrap">
        <div class="container-donepayment">
            <h1 class="highlight">Your Order Placed Successfully</h1>
            
            <Link to='/products'>
            <button class="cont-button">Continue Shopping</button>
            </Link>
        </div>

        
    </div> 
    </div>
    
    }

    </>
  )
}}

export default Payment