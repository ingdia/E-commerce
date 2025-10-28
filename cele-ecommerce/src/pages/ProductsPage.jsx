import ProductCards from "../components/ProductCards"
import slide4img from '../assets/images/Slide4.png'
import slide2img from '../assets/images/Slide2.png'
import slide3img from '../assets/images/Slide3.png'
import asideImg from '../assets/images/side.png'
import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import CategoryFilter from "../components/CategoryFilter"; 




export default function ProductsPage() {
  const [selectedCat, setSelectedCat] = useState("all"); // start with filtering on all Products

  const productCards = [
    {id:1, name:"Iphone", image:slide4img, amount:"50000", Icon:ShoppingCart, Category:"Cameras"},
    {id:2, name:"Iphone", image:slide2img, amount:"50000", Icon:ShoppingCart, Category:"Smartphones"},
    {id:3, name:"Iphone", image:asideImg, amount:"50000", Icon:ShoppingCart, Category:"Smartwatches"},
    {id:4, name:"Iphone", image:slide3img, amount:"50000", Icon:ShoppingCart, Category:"Laptops"},
    {id:5, name:"Iphone", image:slide4img, amount:"50000", Icon:ShoppingCart, Category:"Desktops"},
    {id:6, name:"Iphone", image:slide2img, amount:"50000", Icon:ShoppingCart, Category:"Headphones"},
    {id:7, name:"Iphone", image:asideImg, amount:"50000", Icon:ShoppingCart, Category:"Gaming Accessories"},
    {id:8, name:"Iphone", image:slide3img, amount:"50000", Icon:ShoppingCart, Category:"Battery"},
  ];

  // function to filter products based on selected category
  function getFilteredProducts() {
    if(selectedCat === "all") return productCards;
    return productCards.filter(p => p.Category === selectedCat);
  }

  const filteredProductsbyCat = getFilteredProducts();

  return (
    <div className="p-10 px-14">
      <h1>Products Page</h1>

      {/* Render CategoryFilter and pass setSelectedCat */}
      <CategoryFilter setSelectedCategory={setSelectedCat} /> 

      {/* Products list */}
      <ProductCards productCards={filteredProductsbyCat} title="Products" />
    </div>
  )
}
