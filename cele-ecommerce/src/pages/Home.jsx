import React from "react"
import slide4img from '../assets/images/Slide4.png'
import slide2img from '../assets/images/Slide2.png'
import slide3img from '../assets/images/Slide3.png'
import asideImg from '../assets/images/side.png'
import { ShoppingCart } from "lucide-react"
import ProductCards from "../components/ProductCards"


function Home (){
     const productCards = [
     {id:1, name:"Iphone" , image:slide4img, amount: "50000", Icon:ShoppingCart , Category:"Tablet"},
     {id:2, name:"Iphone",  image:slide2img, amount: "50000", Icon:ShoppingCart, Category:"Tablet"},
     {id:3, name:"Iphone",  image:asideImg, amount: "50000", Icon:ShoppingCart, Category:"Tablet"},
     {id:4, name:"Iphone",  image:slide3img, amount: "50000", Icon:ShoppingCart, Category:"Tablet"},
     {id:5, name:"Iphone" , image:slide4img, amount: "50000", Icon:ShoppingCart , Category:"Smart Phone"},
     {id:6, name:"Iphone",  image:slide2img, amount: "50000", Icon:ShoppingCart, Category:"Tablet"},
     {id:7, name:"Iphone",  image:asideImg, amount: "50000", Icon:ShoppingCart, Category:"Tablet"},
     {id:8, name:"Iphone",  image:slide3img, amount: "50000", Icon:ShoppingCart, Category:"Tablet"},
     
 ]
    return(<>
    <section className="py-10 px-16 bg-gray-200 font-serif grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4 ">
        {/* left sliding image */}
        <div className="col-span-2  ">
           <div className="bg-black max-h-[600px] rounded-2xl text-white flex flex-col md:flex-row p-16 justify-between gap-12" > 
            <div className="flex flex-col">
                <p className="bg-red-600 md:w-[120px] flex items-center font-bold justify-center p-1 rounded-bl-2xl rounded-tr-2xl">New arrival</p>
                <h2 className="text-[40px]">New Arrival Just For you!</h2>
                <p className="text-[16px]  text-gray-500">Fresh and reliable</p>
                <p className="text-blue-500 text-[25px]">Enjoy the time </p>
                <button className="bg-red-600 rounded p-3 font-bold mt-8 md:w-[150px]" >Shop Now</button>
            </div>

            <div>
                
                <img className="rounded-2xl p-2" src={slide4img}/>
            </div>
            </div>
            {/* <div className="bg-black w-[200px]"><img src={slide2img}/></div>
            <div className="bg-black w-[200px]"><img src={slide3img}/></div> */}
        </div>
        {/* the new updates */}
        <div className="col-span-1 ">
            <div className="max-h-[500px] rounded-2xl bg-blue-300 flex flex-col items-center p-16 justify-center text-center">
                <p className="bg-red-600  text-white w-[120px] flex items-center p-1 font-bold justify-center rounded-bl-2xl rounded-tr-2xl">New arrival</p>
                <h2 className="text-3xl p-2 text-black font-bold">Smart Watch</h2>
                <p className=" text-gray-600">Today's super offer</p>
                <div className="flex justify-center  items-center"><img src={asideImg} className="md:h-[230px]"/></div>
            </div>
           
        </div>
    </section>
{/* this the section for  */}
    <section className="py-10 px-16 ">
        <ProductCards productCards={productCards} title= {"The product page"}/>
        {/* <ProductCards productCards={productCards.filter((product) => product.Category==="Smart Phone")} title= {"filter"}/> */}
    </section>
    </>)
}

export default Home