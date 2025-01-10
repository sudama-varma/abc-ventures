
import React from 'react'

const ContactForm = () => {
  return (
    <div className='w-full contact-form mx-auto'>
        <form>
            <label className='text-[#000] font-bold'>Your Name <span className='text-[#FF0000]'>*</span></label>
            <div className='mb-3'>
              <input type="text" className='py-2 px-4 rounded-full border-0 w-full focus:border-1 focus:border-color[#5e52e8]' placeholder='First name' name="name" required />
            </div>
            <div className='mb-3'>
              <input type="text" className='py-2 px-4 rounded-full border-0 w-full  focus:border-1 focus:border-color[#5e52e8]' placeholder='Last name' name="name" required />
            </div>

            <label className='text-[#000] font-bold'>Email <span className='text-[#FF0000]'>*</span></label>
            <div className='mb-3'>
              <input type="email" className='py-2 px-4 rounded-full border-0 w-full  focus:border-1 focus:border-color[#5e52e8]' placeholder='name@example.com' name="name" required />
            </div>

            <label className='text-[#000] font-bold'>Phone number</label>
            <div className='mb-3'>
              <input type="text"  className='py-2 px-4 rounded-full border-0 w-full  focus:border-1 focus:border-color[#5e52e8]' placeholder='081234 56789' name="name" required />
            </div>

            <label className='text-[#000] font-bold'>Your Message</label>
            <div className='mb-3'>
              <textarea  className='py-2 px-4 rounded-2xl border-0 w-full  focus:border-1 focus:border-color[#5e52e8]' rows={5} placeholder='' name="name" required />
            </div>
            
            <div>
                <input type='checkbox' className="mr-2 border-transparent" />
                <label>By submitting this form, you confirm that you have read and agree to ABC Venture’s 
                     <a href='/privacy-policy/' className='underline ml-2'>Privacy Policy</a>
                </label>
            </div>
            <div className='mt-2'>
                <button className='btn btn-send-message'>Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm