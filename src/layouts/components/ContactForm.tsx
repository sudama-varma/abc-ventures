
import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input'

const ContactForm = () => {
  const [value, setValue] = useState<string>("")
  return (
    <div className='w-full contact-form mx-auto relative'>
      <form>
        <label className='text-[#000] font-bold mb-3 block'>Your Name <span className='text-[#FF0000]'>*</span></label>
        <div className='mb-5'>
          <input type="text" className='placeholder:text-slate-400 focus:ring-2 focus:ring-[#5e52e8] py-2 px-4 rounded-2xl border-0 w-full focus:border-1 focus:border-color[#5e52e8]' placeholder='First name' name="name" required />
        </div>
        <div className='mb-5'>
          <input type="text" className='placeholder:text-slate-400 focus:ring-2 py-2 px-4 rounded-2xl border-0 w-full  focus:border-1 focus:border-color[#5e52e8]' placeholder='Last name' name="name" required />
        </div>

        <label className='text-[#000] font-bold mb-3 block'>Email <span className='text-[#FF0000]'>*</span></label>
        <div className='mb-5'>
          <input type="email" className='placeholder:text-slate-400 focus:ring-2 focus:ring-[#5e52e8] py-2 px-4 rounded-2xl border-0 w-full  focus:border-1 focus:border-color[#5e52e8]' placeholder='name@example.com' name="name" required />
        </div>

        <label className='text-[#000] font-bold mb-3 block'>Phone number</label>
        <div className='mb-5'>
          <PhoneInput
            defaultCountry={"IN"}
            className='phone-number-field placeholder:text-slate-400 focus:ring-2 p-0 focus:ring-[#5e52e8] py-2 px-4 rounded-2xl border w-full  focus:border-1 focus:border-color[#5e52e8]'
            placeholder="081234 56789"
            value={value}
            onChange={setValue} />
        </div>

        <label className='text-[#000] font-bold mb-3 block'>Your Message</label>
        <div className='mb-5'>
          <textarea className='placeholder:text-slate-400 focus:ring-2  focus:ring-[#5e52e8] py-2 px-4 rounded-2xl border-0 w-full h-32 focus:border-1 focus:border-color[#5e52e8]' rows={5} placeholder='' name="name" required />
        </div>

        <div className='flex items-start'>
          <input type='checkbox' className="mr-2  mt-1 border-transparent rounded" />
          <label className='text-[#100d06]'>By submitting this form, you confirm that you have read and agree to ABC Venture’s
            <a href='/privacy-policy/' className='underline ml-2'>Privacy Policy</a>
          </label>
        </div>
        <div className='mt-8'>
          <button className='btn btn-send-message py-2 px-4 rounded-2xl hover:bg-[#443AB9] w-full md:w-auto'>Send message</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm