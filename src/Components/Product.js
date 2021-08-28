import { useCart } from "react-use-cart";
import {Link} from 'react-router-dom';
import React from 'react';
const Product = (props) => {
  const { addItem } = useCart();
    return (
        <>
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div class="card p-0 overflow-hidden h-90  shadow">
          <img src={props.img} style={{height:'15rem'}} class="card-img-top img-fluid " />
          <div class="card-body">
            <h3 class="card-title mb-1 font-bold text-center">{props.title}</h3>
            <p class="card-text mt-3 text-center">{props.text}</p>
            <p class="card-text mt-3 text-center font-bold" >₹ {props.price}</p>
            <div className="text-center"><button className="btn btn-light"><Link to={`/products/${props.id}`}>View Product</Link></button></div>
            <div className="text-center"><button class="btn btn-success mt-3 px-3 rounded-full " onClick={()=>addItem(props.product)}>Add To Cart  </button></div>
          </div>
        </div>
        </div>
        </>
    )
}

export default Product
   