import React from 'react'
import { useCart } from 'react-use-cart';
const Cart = () => {
    const { isEmpty,totalUniqueItems,items,totalItems,cartTotal,removeItem,emptyCart,updateItemQuantity } = useCart();
    
    if(isEmpty) 
       return <h1 className="text-center h1">No Items Present in the Cart</h1>
       
    
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
              <div className="col-12">
                  <h1 className="font-bold mb-3">Cart ({totalUniqueItems})     Total-Items in Cart: ({totalItems})</h1>
                  <table className="table  table-dark  table-hover table-striped m-0">
                        <thead className="text-center">
                            <tr>
                                
                                <th scope="col">Item</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col ms-5">Actions</th>
                            </tr>
                        </thead>
                  <tbody className="text-center">
                     {items.map((item,index)=>{
                         return(
                         <tr key={index}>
                             <td><img src={item.img} style={{height:'5rem', width:'5rem', alignItems:'center'}}/></td>
                             <td>{item.title}</td>
                             <td>₹ {item.price}</td>
                             <td>{item.quantity}</td>
                             <td>
                                 <button className="btn btn-info ms-1" onClick={()=>{
                                     updateItemQuantity(item.id, item.quantity - 1)
                                 }}>-</button> 
                                 <button className="btn btn-info ms-2" onClick={()=>{
                                     updateItemQuantity(item.id, item.quantity + 1)}}>+</button>
                                 <button className="btn btn-danger ms-2" onClick={()=>{
                                     removeItem(item.id)
                                 }}>Cancel Item</button>

                             </td>
                         </tr>
                         )
                     })}
                     
                     </tbody>
                  </table>
              </div>
              <div className="col-auto ms-auto">
                  <h2 className="h5 mt-4">Total Price: ₹ {cartTotal}</h2>
              </div>
              <div className="col-auto ">
                  <button className="btn btn-danger mt-4" onClick={()=> emptyCart()} >Clear Items</button>
              </div>
              <div className="col-auto ">
                  <button className="btn btn-primary mt-4" >Checkout</button>
              </div>
            </div>
        </section>
    )
}

export default Cart;
