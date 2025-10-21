import React from "react";
import slide4img from '../assets/images/Slide4.png'
import slide2img from '../assets/images/Slide2.png'
import slide3img from '../assets/images/Slide3.png'
import asideImg from '../assets/images/side.png'
import { ShoppingCart } from "lucide-react"

function ProductCards(){
 const productCards = [
     {id:1, name:"Iphone" , image:slide4img, amount: "50000", Icon:ShoppingCart , Category:"Tablet"},
     {id:2, name:"Iphone",  image:slide2img, amount: "50000", Icon:ShoppingCart, Category:"Tablet"},
     {id:3, name:"Iphone",  image:asideImg, amount: "50000", Icon:ShoppingCart, Category:"Tablet"},
     {id:4, name:"Iphone",  image:slide3img, amount: "50000", Icon:ShoppingCart, Category:"Tablet"},
     {id:1, name:"Iphone" , image:slide4img, amount: "50000", Icon:ShoppingCart , Category:"Tablet"},
     {id:2, name:"Iphone",  image:slide2img, amount: "50000", Icon:ShoppingCart, Category:"Tablet"},
     {id:3, name:"Iphone",  image:asideImg, amount: "50000", Icon:ShoppingCart, Category:"Tablet"},
     {id:4, name:"Iphone",  image:slide3img, amount: "50000", Icon:ShoppingCart, Category:"Tablet"},
     
 ]
 const Categories = [
  {id:1, catname: "Tablet", image:slide2img, },
  {id:2, catname: "Tablet", image:slide2img, },
  {id:3, catname: "Tablet", image:slide2img, },
  {id:4, catname: "Tablet", image:slide2img, },
  {id:5, catname: "Tablet", image:slide2img, },
  {id:6, catname: "Tablet", image:slide2img, },
  {id:7, catname: "Tablet", image:slide2img, },
  {id:8, catname: "Tablet", image:slide2img, },
  {id:9, catname: "Tablet", image:slide2img, },
  {id:10, catname: "Tablet", image:slide2img, },
 ]
    
return (
    <>
    <div class="flex space-x-4 pt-4">
      {
        Categories.map((category)=>(
          <div key={category.id} className="bg-red-100 p-3 rounded">
            <img src={category.image}/>
            <p>{category.catname}</p>
          </div>
        ))
      }
    </div>
      <div className="text-white grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 pt-10 gap-4">
        {
            productCards.map((post )=>(
                  <div key={post.id} className="rounded-2xl p-4 hover:bg-gray-400 hover:border-2 border-red-500">
                    <img src={post.image}/>
                    <p>{post.name}</p>
                    <p>amount</p>
                    <button className="flex border-2 text-red-600 border-red-600 rounded p-3 font-bold mt-8 md:w-[150px"><ShoppingCart/> Add to Cart</button>
                </div>
            ))
        }
      </div>
    </>
)
}
export default ProductCards