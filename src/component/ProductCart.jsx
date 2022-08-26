import React,{useEffect,useState,useContext} from 'react'
import SingleProduct from './SingleProduct'
import {CartContext} from "../context/ContextProvider"
function ProductCart() {
const {cart,setCart}= useContext(CartContext)
const [total,setTotal] = useState('');

useEffect(()=>{
  setTotal(cart.reduce((acc,curr)=>{
   acc = acc + Number(curr.price)
   return acc
  },0))

},[cart])

  return (
    <div >
       <h3>total price $ {total}</h3>
       <div style={{margin:"1rem",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}} >
       {
        cart.map((item)=>(
          <SingleProduct product={item} />

        ))
       }
       </div>
    </div>
  )
}

export default ProductCart