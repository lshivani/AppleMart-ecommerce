import {Component} from 'react'

import ProductCard from '../ProductCard'
import './index.css'
//import Cookies from 'js-cookie'
import axios from 'axios'

class AllProductsSection extends Component {
  state = {
    productsList: []
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = ()=> {
    axios.get('http://localhost:8081/getproducts')
    .then(res=>{console.log(res.data)
      
      this.setState({productsList:res.data})

    })
    
}

  renderProductsList = () => {
    const {productsList} = this.state
    return (
      <div>
        <h1 className="products-list-heading">All Products</h1>
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return <>{this.renderProductsList()}</>
  }
}

export default AllProductsSection
