
import slide2img from '../assets/images/Slide2.png'


export default function CategoryFilter(){
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
        <div class="flex flex-col md:flex-row space-x-4 pt-4 p-8 ">
      {
        Categories.map((category)=>(
          <div key={category.id} className="bg-red-100 p-3 rounded">
            <img src={category.image}/>
            <p>{category.catname}</p>
          </div>
        ))
      }
    </div>
    </>)
}