import slide2img from '../assets/images/Slide2.png'

export default function CategoryFilter({ setSelectedCategory }) { //receive function from parent
  const Categories = [
    {id:1, Category:"Smartphones", image:slide2img },
    {id:2, Category:"Smartwatches", image:slide2img },
    {id:3, Category:"Laptops", image:slide2img },
    {id:4, Category:"Desktops", image:slide2img },
    {id:5, Category:"Headphones", image:slide2img },
    {id:6, Category: "Gaming Accessories", image:slide2img },
    {id:7, Category: "Cameras", image:slide2img },
    {id:8, Category: "Battery", image:slide2img },
  ]

  return (
    <div className="flex flex-col md:flex-row space-x-4 pt-4 p-8">
      {Categories.map((category) => (
        <div 
          key={category.id} 
          className="bg-red-100 p-3 rounded cursor-pointer"
          onClick={() => setSelectedCategory(category.Category)} //call parent function
        >
          <img src={category.image}/>
          <p>{category.Category}</p>
        </div>
      ))}
    </div>
  )
}
