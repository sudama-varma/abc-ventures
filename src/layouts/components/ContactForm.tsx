
import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input'

const ContactForm = () => {
  const url = `http://127.0.0.1:1337/api/contacts`;
  const [value, setValue] = useState<string>("")
  const [form, setForm] = useState<any>({
    firstName: '',
    lastName: "",
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch(url.toString(), {
        method:"POST",
        body: form,
        headers: {
          Authorization: `Bearer d5929cc47334a7fae3e665da66013f381a9576c69772f188d1866c279fa44611e6d9a90e4171e0f6d6ae2735f7e3ef7fce8058eb86861587b9927ef0baf328acbd8df24f200f9f989e8c3eed25b09cab310f86198cd1d9e2c2e51273abea0f460ffd2be3b052e01123902c7dacc29c82c6528dc172d0f9ad6b11d361d84d874c`,
        },
      });
      let data = await res.json();
      console.log(data)
      setForm({
        firstName: '',
        lastName: "",
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      // error
    }
  }
  return (
    <div className='w-full contact-form mx-auto relative'>
      <form onSubmit={handleSubmit} method='POST'>
        <label className='text-[#000] font-bold mb-3 block'>Your Name <span className='text-[#FF0000]'>*</span></label>
        <div className='mb-5'>
          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className='placeholder:text-slate-400 focus:ring-2 focus:ring-[#5e52e8] py-2 px-4 rounded-2xl border-0 w-full focus:border-1 focus:border-color[#5e52e8]' placeholder='First name' required />
        </div>
        <div className='mb-5'>
          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className='placeholder:text-slate-400 focus:ring-2 py-2 px-4 rounded-2xl border-0 w-full  focus:border-1 focus:border-color[#5e52e8]' placeholder='Last name' required />
        </div>

        <label className='text-[#000] font-bold mb-3 block'>Email <span className='text-[#FF0000]'>*</span></label>
        <div className='mb-5'>
          <input type="email" name="email" value={form.email} onChange={handleChange} className='placeholder:text-slate-400 focus:ring-2 focus:ring-[#5e52e8] py-2 px-4 rounded-2xl border-0 w-full  focus:border-1 focus:border-color[#5e52e8]' placeholder='name@example.com' required />
        </div>

        <label className='text-[#000] font-bold mb-3 block'>Phone number</label>
        <div className='mb-5'>
          <PhoneInput
            defaultCountry={"IN"}
            className='phone-number-field placeholder:text-slate-400 focus:ring-2 p-0 focus:ring-[#5e52e8] py-2 px-4 rounded-2xl border w-full  focus:border-1 focus:border-color[#5e52e8]'
            placeholder="081234 56789"
            value={form.phone}
            onChange={(v) => {
              setForm({ ...form, phone: v });
            }} />
        </div>

        <label className='text-[#000] font-bold mb-3 block'>Your Message</label>
        <div className='mb-5'>
          <textarea name="message" value={form.message} onChange={(ev) => {
            setForm({ ...form, message: ev.target.value })
          }} className='placeholder:text-slate-400 focus:ring-2  focus:ring-[#5e52e8] py-2 px-4 rounded-2xl border-0 w-full h-32 focus:border-1 focus:border-color[#5e52e8]' rows={5} placeholder='' required />
        </div>

        <div className='flex items-start'>
          <input type='checkbox' className="mr-2  mt-1 border-transparent rounded" />
          <label className='text-[#100d06]'>By submitting this form, you confirm that you have read and agree to ABC Venture’s
            <a href='/privacy-policy/' className='underline ml-2'>Privacy Policy</a>
          </label>
        </div>
        <div className='mt-8'>
          <button type='submit' className='btn btn-send-message py-2 px-4 rounded-2xl hover:bg-[#443AB9] w-full md:w-auto'>Send message</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm