/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import axios from 'axios'

import banner2 from '../../assets/banner-2.png'

import Form from '../../types'

const Contact = () => {
  const [formData, setFormData] = useState<Form>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/form', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log('Post submitted successfully!', response.data)
      setFormData({ name: '', email: '', phone: '', message: '' }) // Clear the form
    } catch (error) {
      console.error(error)
    }
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  return (
    <section className='text-[#636C80] body-font relative'>
      <div className='container px-5 py-48 mx-auto flex sm:flex-nowrap flex-wrap'>
        <div className='lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
          <img src={banner2} className='absolute inset-0 object-cover object-center w-full h-full' alt='banner' />
          <div className='bg-white relative flex flex-wrap py-6 rounded shadow-md'>
            <div className='lg:w-1/2 px-6'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>ADDRESS</h2>
              <p className='mt-1'>Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
            </div>
            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs'>EMAIL</h2>
              <a href='#' className='text-indigo-500 leading-relaxed'>
                example@email.com
              </a>
              <h2 className='title-font font-semibold text-gray-900 tracking-widest text-xs mt-4'>PHONE</h2>
              <p className='leading-relaxed'>123-456-7890</p>
            </div>
          </div>
        </div>
        <form
          className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
          onSubmit={submitHandler}
        >
          <h2 className='text-white text-3xl mb-1 font-medium title-font'>Liên hệ</h2>
          <p className='leading-relaxed mb-5 text-[#636C80]'>
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className='relative mb-4'>
            <label htmlFor='name' className='leading-7 text-sm text-gray-300'>
              Họ và tên
            </label>
            <input
              onChange={changeHandler}
              value={formData.name}
              placeholder='Nhập họ và tên...'
              type='text'
              id='name'
              name='name'
              className='w-full bg-[#23272F] rounded border border-[#23272F] focus:border-gray-500 focus:ring-2 focus:ring-transparent text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='email' className='leading-7 text-sm text-gray-300'>
              Email
            </label>
            <input
              onChange={changeHandler}
              value={formData.email}
              placeholder='Nhập Email...'
              type='email'
              id='email'
              name='email'
              className='w-full bg-[#23272F] rounded border border-[#23272F] focus:border-gray-500 focus:ring-2 focus:ring-transparent text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='email' className='leading-7 text-sm text-gray-300'>
              Số điện thoại
            </label>
            <input
              onChange={changeHandler}
              value={formData.phone}
              placeholder='Nhập số điện thoại...'
              type='tel'
              id='phone'
              name='phone'
              className='w-full bg-[#23272F] rounded border border-[#23272F] focus:border-gray-500 focus:ring-2 focus:ring-transparent text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='message' className='leading-7 text-sm text-gray-300'>
              Lời nhắn
            </label>
            <textarea
              onChange={changeHandler}
              value={formData.message}
              placeholder='Nhập lời nhắn...'
              id='message'
              name='message'
              className='resize-none w-full h-[150px] bg-[#23272F] rounded border border-[#23272F] focus:border-gray-500 focus:ring-2 focus:ring-transparent text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-[#23272F] text-white px-5 py-2 rounded hover:bg-[#4ED9F8] hover:text-gray-800 transition-colors duration-500'
          >
            Gửi liên hệ
          </button>
          <p className='text-xs text-gray-500 mt-3'>
            Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
