import axios from 'axios';
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { AppContext } from '../Context/AppContext';

const Payment = () => {

  const { backendUrl } = useContext(AppContext)
  const [amount, setAmount] = useState('')

  const submitHandler = async () => {
    
    if (amount <= 0) {
      toast.error("Please enter a valid amount")
      return
    }

    if (amount >= 1 && amount < 50) {
      toast.error("The minimum donation amount must be at least Rs.50")
      return
    }


    try {
      const responseStripe = await axios.post(backendUrl + "/api/payment", { amount })

      if (responseStripe.data.success) {
        const {session_url} = responseStripe.data
        window.location.replace(session_url)
      }
      
    } catch (error) {
      console.log(error.message)
      toast.error("Payment failed")
    }

  }
  

  return (
    <div className='py-8 xl:w-[30%] lg:w-[35%] md:w-[43%] sm:w-[52%] w-[65%] mx-auto'>
      <h1 className='font-semibold text-2xl pb-2'>Pay to help</h1>

      <div className='flex flex-col gap-3.5 mt-10'>
        <h2 className='text-xl text-[#216108] font-semibold'>We are all in this Together!!</h2>

        <input onChange={(e) => setAmount(e.target.value)} value={amount} className='sm:w-[100%] border border-gray-400 outline-none px-4 py-1.5 rounded-md bg-green-50 placeholder-gray-700' type="number" placeholder='Enter amount to pay' required />

        <button onClick={()=> submitHandler()} className='bg-green-600 text-white font-bold mt-2 py-2 px-6 rounded-full mx-auto' type='submit'>Pay</button>
      </div>

    </div>
  )
}

export default Payment