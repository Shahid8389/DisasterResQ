import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { AppContext } from '../Context/AppContext'
import axios from 'axios'

const VolunteerRegistration = () => {

  const { backendUrl } = useContext(AppContext)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [district, setDistrict] = useState("")
  const [address, setAddress] = useState("")
  const [interest, setInterest] = useState("")

  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const volunteerData = {
        name,
        email,
        phone,
        country,
        state,
        district,
        address,
        interest
      }

      const response = await axios.post(backendUrl + '/api/volunteerRegistration', volunteerData)

      if (response.data.success) {
        toast.success("Volunteer Registered Successfully")

        setName('')
        setEmail('')
        setPhone('')
        setCountry('')
        setState('')
        setDistrict('')
        setAddress('')
        setInterest('')

      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <div className='py-8 xl:w-[33%] lg:w-[42%] md:w-[48%] sm:w-[58%] w-[70%] mx-auto'>

      <div>
        <h1 className='font-semibold text-2xl'>Volunteer Registration</h1>
      </div>

      <form onSubmit={submitHandler} className='flex flex-col gap-3.5 mt-4'>

        <input onChange={(e) => setName(e.target.value)} value={name} className='sm:w-[100%] border border-gray-400 outline-none px-4 py-1.5 rounded-md bg-green-50 placeholder-gray-700' type="text" placeholder='Enter Your Name' required />

        <input onChange={(e) => setEmail(e.target.value)} value={email} className='sm:w-[100%] border border-gray-400 outline-none px-4 py-1.5 rounded-md bg-green-50 placeholder-gray-700' type="email" placeholder='Enter Your Email Address' required />

        <input onChange={(e) => setPhone(e.target.value)} value={phone} className='sm:w-[100%] border border-gray-400 outline-none px-4 py-1.5 rounded-md bg-green-50 placeholder-gray-700' type="tel" pattern='[0-9]{10}' placeholder='Enter Your Phone No.' required />

        <input onChange={(e) => setCountry(e.target.value)} value={country} className='sm:w-[100%] border border-gray-400 outline-none px-4 py-1.5 rounded-md bg-green-50 placeholder-gray-700' type="text" placeholder='Enter Country' required />

        <input onChange={(e) => setState(e.target.value)} value={state} className='sm:w-[100%] border border-gray-400 outline-none px-4 py-1.5 rounded-md bg-green-50 placeholder-gray-700' type="text" placeholder='Enter State' required />

        <input onChange={(e) => setDistrict(e.target.value)} value={district} className='sm:w-[100%] border border-gray-400 outline-none px-4 py-1.5 rounded-md bg-green-50 placeholder-gray-700' type="text" placeholder='Enter District' required />

        <input onChange={(e) => setAddress(e.target.value)} value={address} className='sm:w-[100%] border border-gray-400 outline-none px-4 py-1.5 rounded-md bg-green-50 placeholder-gray-700' type="text" placeholder='Enter Your Address' required />

        <input onChange={(e) => setInterest(e.target.value)} value={interest} className='sm:w-[100%] border border-gray-400 outline-none px-4 py-1.5 rounded-md bg-green-50 placeholder-gray-700' type="text" placeholder='Your Interest to work in' required />

        <button className='bg-green-600 text-white font-bold mt-4 py-2 px-6 rounded-full mx-auto' type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default VolunteerRegistration