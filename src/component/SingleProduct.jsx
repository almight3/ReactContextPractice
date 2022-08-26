import React,{useContext} from 'react'
import './SingleProduct.css'
import { CartContext } from '../context/ContextProvider'

function SingleProduct({product}) {
  const {cart,setCart} = useContext(CartContext)
    const handelRemove = (product)=>{
      console.log("inside remove")
      setCart(cart.filter((c)=>c.id != product.id))
  }
  return (
    <div className='product-container' style={{padding:"1rem"}}>
        <img src={product.image}  style={{maxWidth:"250px"}}/>
        <p style={{margin:"0.2rem"}}>{product.name}</p>
        <h5 style={{margin:"0.5rem"}}>{product.price}</h5>
       {
        cart.includes(product) ?  <button onClick={()=>handelRemove(product)}>Remove from Cart</button>
        :<button onClick={()=>setCart([...cart,product])}> Add to Cart</button>
       }
    </div>
  )
}

export default SingleProduct