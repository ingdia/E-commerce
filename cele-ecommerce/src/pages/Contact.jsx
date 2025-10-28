import {MapPin, PhoneCall,Mail   } from 'lucide-react'
function Contact (){
    return(
    <> 
   <div className='flex flex-col md:flex-row justify-between p-20 font-serif'>
    {/* this is the right side  */}
    <div className='flex flex-col'>
        <div className='pb-8'>
        <h2 className='text-4xl font-bold text-blue-700 py-2'>Contact us!</h2>
        <p>Have a question or need assistance? We’re here to help!</p>
        <p>Whether you need support with your order, have a general </p>
        <p>inquiry, or want to provide feedback, our team is ready to </p>
        <p>assist you. Simply fill out the contact form below or reach </p>
        <p>us through our phone number or email. We aim to respond</p>
        <p>as quickly as possible and ensure your experience with us is </p>
        <p>smooth and enjoyable.</p>
        </div>
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col md:flex-row space-x-6 text-gray-600'>
                <MapPin className='border-gray-600 p-1.5 border-2 rounded-full w-10 h-10' />
                <div className=''>
                    <h3 className='text-xl font-bold'>Address</h3>
                    <p>Kigali-Rwanda</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row space-x-6 text-gray-600'>
                <PhoneCall className='border-gray-600 p-1.5 border-2 rounded-full w-10 h-10' />
                <div>
                    <h3 className='text-xl font-bold'>Phone</h3>
                    <p>+250 798 334 054</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row space-x-6 text-gray-600'> 
           <Mail className='border-gray-600 p-1.5 border-2 rounded-full w-10 h-10' /> 
                <div>
                    <h3 className='text-xl font-bold'>Address</h3>
                    <p>support@celeelectronics.com</p>
                </div>
            </div>
        </div>
    </div>
    {/* thsi is the left side  */}
    <form className='border-2 border-blue-600 p-8 rounded-4xl'>
        <div className='flex flex-col space-y-2 pb-2'>
        <label>Name </label>
        <input type="text" placeholder='Enter name' className='border-2 p-2 border-gray-300' />
        </div>

        <div className='flex flex-col space-y-2 pb-2'>
        <label>Email </label>
        <input type="text" placeholder='Enter email' className='border-2 p-2 border-gray-300' />
        </div>

        <div className='flex flex-col space-y-2 pb-2'>
        <label>Phone no.(optional)  </label>
        <input type="text" placeholder='Enter the phone' className='border-2 p-2 border-gray-300' />
        </div>
        <div className='flex flex-col space-y-2 pb-2'>
        <label>Tell us about your query </label>
        <textarea type="text" placeholder='Enter message' className=' w-full md:w-3/4 lg:w-1/2 min-h-[120px] border-2 border-gray-100 ' />
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
   </div>
    </>
    )
}

export default Contact