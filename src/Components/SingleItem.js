import React , {useState, useEffect} from 'react'
import { useParams , useHistory } from 'react-router-dom';
import { useCart } from "react-use-cart";
const SingleItem = () => {
    const { addItem } = useCart();
const [item, setItem] = useState({});
const params = useParams();
const history = useHistory();
   
useEffect(() => {
    
    fetch(`http://localhost:3000/users/${params.id}`)
    .then(res => res.json())
    .then(item=> {
        setItem(item);
        
        
    })

    
}, []);
    return (
        <div className="container mx-auto mt-12">
            <button className="mb-12 font-bold" onClick={()=> {history.goBack()}}>Back</button>
            <div className="flex">
                <img src={item.img} style={{height: 200}} />
                <div className="ml-16">
                    <h1 className="text-x1 font-bold">{item.title}</h1>
                    <div className="text-md">{item.desc}</div>
                    <div className="font-bold mt-2">{item.price}</div>
                    <button className="btn btn-success py-1 px-8 rounded-full font-bold mt-4" onClick={() => {addItem(item)}}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleItem;
