import React,{useState,useContext} from 'react'
import SingleProduct from './SingleProduct';
import { CartContext } from '../context/ContextProvider';
function ProductPage() {
  
const {products} = useContext(CartContext);


  return (
    <div style={{margin:"1rem",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"} }>
      {products.map((product)=>(<SingleProduct key={product.id} product = {product}/>))}
    </div>
  )
}

export default ProductPage