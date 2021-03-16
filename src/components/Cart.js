import React from 'react';
import formatCurrency from '../util';


function Cart(props) {
    const {cartItems} = props;
    return (
        <div>
            {
              cartItems.length === 0 ? (
                  <div className = "cart cart-header">Cart is empty</div>
               ) : ( 
              <div className = "cart cart-header">
                 You have {cartItems.length} in the cart{" "}
              </div>
               )}
           <div>
            <div className = "cart">
                <ul className = "cart-items">
                     {cartItems.map(item => (
                         <li key = {item._id}>
                             <div>
                                 <img
                                     src = {item.image}
                                     alt = {item.title}
                                 />
                             </div>
                             <div>
                                 <div>{item.title}</div>
                                <div className = "right">
                                   {formatCurrency(item.price)} x {item.count}{" "}
                                   <button
                                      className="button"
                                      onClick = {() => props.removeFromCart(item)}
                                      >
                                      Remove     
                                  </button>
                                </div>
                             </div>
                         </li>
                     ))}
                </ul>
            </div>
          </div>
        </div>
      
    )
}

export default Cart;
