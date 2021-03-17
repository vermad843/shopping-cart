import React, { Component } from 'react';
import Product from './components/Products';
import data from './data.json';
import Filter from './components/Filter';
import Cart from './components/Cart';

class App extends Component {
     constructor() {
          super();
          this.state = {
               products : data.products,
               cartItems : localStorage.getItem("cartItems")
                          ? JSON.parse(localStorage.getItem("cartItems")) 
                          : [],
               size : '',
               sort : ''
          };
     }

    createOrder = (order) => {
      alert("Need to save order for " + order.name);
    }

    removeFromCart = (product) => {
      const cartItems = this.state.cartItems.slice();
      this.setState({
         cartItems: cartItems.filter((x) => x._id !== product._id), 
      }); 
      localStorage.setItem(
            "cartItems", 
            JSON.stringify(cartItems.filter((x) => x._id !== product._id))
           );
          };

    addToCart = (product) => {
      const cartItems = this.state.cartItems.slice();
      let alreadyInCart = false;
      cartItems.forEach((item) => {
         if(item._id === product._id) {
            item.count++;
            alreadyInCart = true;
         }
      });
      if(!alreadyInCart) {
         cartItems.push({...product, count: 1})
      }
      this.setState({cartItems});
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } 

    sortProducts = (e) => {
         const sort = e.target.value;
         this.setState(() => ({
              sort : sort,
              products : this.state.products
                  .slice()
                   .sort((a, b) => 
                    sort === "lowest" 
                      ? a.price > b.price
                        ? 1
                        :-1
                      : sort === "highest"
                      ? a.price < b.price
                        ? 1
                        :-1
                      : a._id > b._id
                        ? 1
                        :-1    
              ),
         }));
    };

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
       const {products,size, sort, cartItems} = this.state;
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
                          addToCart={this.addToCart}
                      />
                 </div>
                 <div className = "sidebar">
                      <Cart 
                         cartItems = {cartItems}
                         removeFromCart = {this.removeFromCart}     
                         />
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