import ProductCards from "../components/ProductCards"
import slide4img from '../assets/images/Slide4.png'
import slide2img from '../assets/images/Slide2.png'
import slide3img from '../assets/images/Slide3.png'
import asideImg from '../assets/images/side.png'
import { ShoppingCart } from "lucide-react"

function ProductsPage (){
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
            <div>
             <ProductCards productCards={productCards}  title={name}/> 

            </div>
    </>)
}

export default ProductsPage