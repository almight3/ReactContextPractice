import React,{useState} from 'react'
import { faker } from '@faker-js/faker';
export const CartContext = React.createContext()
faker.seed(20)
function ContextProvider({children}) {
  const productArray = [...Array(20)].map((p)=>({
    id:faker.datatype.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price().slice(0,3),
    image:faker.image.business(false)
}))
const [cart,setCart] = useState([]);
const [products] = useState(productArray)  
 const store={
    cart,
    setCart,
    products
  }
  return (
    <CartContext.Provider value={store}>
     {children}
    </CartContext.Provider>
  )
}

export default ContextProvider