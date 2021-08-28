
import React , {useState, useEffect} from 'react';
import Product from './Product';
const Items = () => {
   const [item, setItem] = useState([]);

   useEffect(() => {
    
      fetch(`http://localhost:3000/users`)
      .then(res => res.json())
      .then(item=> {
          setItem(item);
          
          
      })
  
      
  }, []);

    return (
        <>
           
               <h1 className="text-lg font-bold my-8 text-center">Our Servings</h1>
               
               <section className="py-4 container">

                <div className="row justify-content-space-between">
                   
                   {item.map((item,index)=>{
                      return (
                        
                        <Product 
                           img={item.img} 
                           title={item.title} 
                           text={item.desc} 
                           price={item.price} 
                           product={item} 
                           key={index} 
                           id = {item.id}
              
                        />
                       
                        
                      )
                   })}
                   
                   
                </div>   
                   
                   
              </section>
              <h1>{item.id}</h1>
           
        </>
    )
}

export default Items;

