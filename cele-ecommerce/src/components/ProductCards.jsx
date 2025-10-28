import React, { useState } from "react";
import { ShoppingCart } from "lucide-react"
import CategoryFilter from "./CategoryFilter";
function ProductCards({productCards,title}){
//  const productCards = props.productCards;
//  const title = props.title

const[mycart, setaddToCart] = useState([]);
function addMeToCart (product){
  const myCartItem = mycart.some((p)=> p.id === product.id) ;
  if(!myCartItem){
    let  myCartList = [...mycart, product]
         setaddToCart(myCartList)
     
        
    alert(`added ${product.name} added to cart`)
    console.log(product.name)//for the debug
    return myCartList
  }
  else
    alert("product already exist in cart list")

}
    
return (
    <>
     <h2  className="text-black text-2xl font-bold">{title}</h2>
      <div className="text-white grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 pt-10 gap-4">
        {
            productCards.map((post )=>(
                  <div key={post.id} className="rounded-2xl text-gray-600 hover:text-white p-4 hover:bg-gray-400 border-2 border-blue-200">
                    <img src={post.image}/>
                    <p>{post.name}</p>
                    <p>{post.amount}</p>
                    <button onClick={()=>{addMeToCart(post)}} className="flex border-2 text-red-600 border-red-600 rounded p-3 font-bold mt-8 md:w-[150px"><ShoppingCart/> Add to Cart</button>
                </div>
            ))
        }
      </div>
    </>
)
}
export default ProductCards