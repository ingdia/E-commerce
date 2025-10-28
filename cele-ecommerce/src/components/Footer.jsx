import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.jpg'
import {Facebook, Twitter, Instagram, Linkedin  } from "lucide-react"
function Footer() {
return(
    <>
    <section className='bg-black text-white py-10 px-16 font-serif'>
        {/* the div for the upper part */}
        <div className='flex flex-col md:flex-row md:justify-between border-b pb-10 border-gray-500 '>
            <div>
                <div><img src={logo}/></div>
                <p>Cele Electronics Ltd! Your trusted source for genuine electronics in Kigali.</p> 
                 <p>  We bring you quality, affordability, and expert service under one roof.</p>
                <div>
                    <h3>Subscribe to our newsletter for regular updates about Offers, Coupons & more</h3>
                    
                </div>
            </div>
            
            {/* icons */}
            <div >
            <div className='flex flex-col md:flex-row space-x-4 py-10'>
                <Facebook className='w-10 h-10 p-2 border-2 border-red-500 rounded-full' />
                <Twitter className='w-10 h-10 p-2 border-2 border-red-500 rounded-full'/>
                <Instagram className='w-10 h-10 p-2 border-2 border-red-500 rounded-full'/>
                <Linkedin className='w-10 h-10 p-2 border-2 border-red-500 rounded-full'/>
            </div>
                <div className='flex flex-col md:flex-row gap-2'>
                        <input type ="text" placeholder='Your Email address' className="border-2 rounded p-2 px-8 border-red-500"/>
                        <buttorn className="p-2 font-bold rounded px-6 bg-red-600">Subscribe</buttorn>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 pt-10  border-b pb-10 border-gray-500 '>
            <div>
                <h4 className='text-blue-400 font-bold text-[16px] pb-4'>Our services</h4>
                <p></p>
            </div>

            <div>
                <h4 className='text-blue-400 font-bold text-[16px] pb-4'>Contact</h4>
                <div className='pb-3'>
                <h5 className='text-[14px] text-gray-400'>Address</h5>
                <p>Kigali-Rwanda</p>
                </div>
                <div className='pb-3'>
                <h5 className='text-[14px] text-gray-400'>Phone</h5>
                <p>+250 788750758</p>
                </div>
                <div className='pb-3'>
                <h5 className='text-[14px] text-gray-400'>Email</h5>
                <p>support@celeelectronics.rw</p>
                </div>
            </div>
            <div className='flex flex-col md:gap-2'>
                <h2 className='text-blue-400 font-bold text-[16px] pb-4'>Quick Link</h2>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/products'>Products</Link>
                <Link TO='/contact'>Contact</Link>

            </div>
            <div className="flex flex-col md:gap-2">
                <h2 className='text-blue-400 font-bold text-[16px] pb-4" '>My Account</h2>
                <p>Login </p>
                <p>Order History </p>
                <p>My Wishlist </p>
                <p>Track Order </p>
            </div>
        </div>
        <div className='flex justify-center pt-4'>
             <p>&copy; {new Date().getFullYear()} Cele Electronics Ltd. All rights reserved.</p>
        </div>
    </section>
    </>
)
}
export default Footer