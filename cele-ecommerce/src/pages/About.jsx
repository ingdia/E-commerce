import image from "../assets/images/image.png"
import { DollarSign, UserCheck, Award, ShieldCheck,ShoppingCart } from "lucide-react";


function About(){
const whatWedo = [
    {name: "Quality Electronics",description: "Genuine products from top global brands.", Icon:Award},
    {name:"Affordable & Reliable", description:"Competitive pricing and trusted service.", Icon:DollarSign},
    {name:"After-Sales Service", description:"Warranty, returns, and maintenance.", Icon:ShieldCheck},
    {name:"Easy Shopping", description:"Convenient in-store and online experience. ", Icon:ShoppingCart},
    {name: "Expert Support", description:"Guidance and help whenever you need it.",Icon:UserCheck}

]
const whyChoose = [
  {
    name: "Unmatched Quality & Trusted Brands",
    description:
      "We offer only genuine, high-performance electronics from top global brands to ensure long-lasting quality.",
    Icon: Award,
  },
  {
    name: "Exceptional Customer Service",
    description:
      "Our team is always ready to provide expert guidance and personalized support, making your shopping experience smooth and reliable.",
    Icon: UserCheck,
  },
  {
    name: "Competitive Prices with Local Reliability",
    description:
      "We deliver great value with affordable pricing and a trusted local presence in Kigali for easy access and support.",
    Icon: DollarSign,
  },
];

    return(<>
    <div className="relative flex justify-center font-serif items-center p-10 bg-gray-200 ">
    
       <img src={image} className="h-[400px] w-full rounded-2xl "/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-800/80 to-transparent  rounded-2xl m-10"></div>
     
       <div className="absolute text-center flex inset-0 z-10 gap-1 text-white flex-col align-center justify-center">
        <h1 className="pb-6 font-bold md:text-[40px]">Welcome to Cele Electronics Ltd</h1>
        <p className="md:text-[16px] text-blue-300 font-bold">Located in Town Center Building (TCB) near KN 4 Ave in Nyarugenge, Kigali,we are your go-to destination for all things electronic.</p> 
        <p className="md:text-[16px] font-bold">From the latest smartphones to high-end home appliances, our mission is simple: bring quality, value and expert service under one roof.</p>
        </div>


    </div> 
    {/* this is thw vision div  */}
    <div className="p-10 text-[16px] flex flex-col items-center min-h-screen  font-serif">
        <h2 className="text-[40px] text-blue-600 pb-2">Our Vision</h2>
        <p>At Cele Electronics Ltd, we believe in making world-class technology accessible in Rwanda. Whether you're</p>
        <p>upgrading your smartphone, powering your workspace, or outfitting your home with the latest smart</p>
        <p>appliance — we're here for you. Our e-commerce platform, Cele Trader, delivers the same high-quality</p>
        <p>experience online as our flagship store in Kigali.</p>
        <h2 className="text-[40px] text-blue-600 pt-4 ">What we do </h2>
<div className="grid grid-cols-1 md:grid-cols-3 p-10 text-gray-700   gap-8">{
            whatWedo.map((item, index)=>{
                return(

                    <div key={index} className="hover:bg-white  flex flex-col justify-center items-center border-2 border-red-200 p-4 rounded-2xl">
                    <div className="flex flex-start " >
                        <item.Icon className="bg-white p-1 text-blue-600 w-[30px] h-[30px] border-2 border-red-500 rounded-full " />
                    </div>
                    <h2 className="text-[20px] ">{item.name}</h2>
                    <p>{item.description}</p>
                </div>
                )
                
            })
            }

        </div>
    </div>
    <div className="min-h-screen bg-black text-white m-20">
         <h2> Our Story</h2>
        <div className="flex p-10 justify-center items-center space-x-2"> 
          
            <div>
               <div>
                <p>Founded in 2018 by Celestin Niyonsaba, Cele Electronics Ltd began with a simple mission — to make quality</p>
               <p>electronics accessible to everyone in Rwanda.</p>
               </div>
               <div>
                <p>What started as a small local shop in Kigali’s Town Center Building (TCB) has grown into one of the city’s</p>
                <p>most trusted electronics retailers, known for its genuine products, affordable prices, and outstanding</p>
               <p>customer care.</p>
               </div>
               <div>
                <p>At Cele Electronics, we believe that technology should empower people, not complicate their lives. That’s</p>
                <p>why we work every day to provide our customers with authentic products, expert support, and a seamless</p>
                <p>shopping experience — both in-store and online.</p>
               </div>
            </div>
            <div>
                <img src={image}/>
            </div>
        </div>
    </div>
     {/* this is the why choose Us div */}
    <div className=" text-center bg-gray-200 md:pt-10  font-serif">
       <h2 className="text-blue-600 text-[40px]">Why Choose Us </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 p-20 text-gray-700  gap-8">{
            whyChoose.map((item, index)=>{
                return(

                    <div key={index} className="hover:bg-white  border-2 border-red-200 p-8 rounded-2xl">
                    <div className="flex items-center justify-center " >
                        <item.Icon className="bg-white p-4 w-[60px] h-[60px] border-2 border-blue-500 rounded-full" />
                    </div>
                    <h2 className="text-[20px] p-2">{item.name}</h2>
                    <p>{item.description}</p>
                </div>
                )
                
            })
            }

        </div>
    </div>
    </>)
}
export default About