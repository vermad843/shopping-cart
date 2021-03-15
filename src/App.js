import React, { Component } from 'react';
import Product from './components/Products';
import data from './data.json';
import Filter from './components/Filter';

class App extends Component {
     constructor() {
          super();
          this.state = {
               products : data.products,
               size : '',
               sort : ''
          };
     }

    sortProducts(sort) {

    }

    filterProducts = (e) => {
       if(e.target.value === "") {
            this.setState({
                 size : e.target.value,
                 product: data.products
            });
       }else {
            this.setState({
                 size : e.target.value,
                 products : data.products.filter(product => (
                      product.availableSizes.indexOf(e.target.value) >= 0 
                 ))
            });
       } 
    }

  render() { 
       const {products,size, sort} = this.state;
    return ( 
      <div className="grid-container">
          <header>
               <a href = "/">React Shopping Cart</a>
          </header>
          <main>
             <div className ="content">
                 <div className = "main">
                      <Filter
                          count = {products.length}
                          size = {size}
                          sort = {sort} 
                          filterProducts = {this.filterProducts}
                          sortProducts = {this.sortProducts} 
                      />
                      <Product
                          products={products}
                      />
                 </div>
                 <div className = "sidebar">
                      Cart Items
                 </div>
             </div>
          </main>
          <footer>
             All right reserved@2021
          </footer>
     </div>
     );
  }
}
 
export default App;