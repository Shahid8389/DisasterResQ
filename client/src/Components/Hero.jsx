import React, { useContext } from 'react'
import { assets } from '../assets/assets.js'
import { AppContext } from '../Context/AppContext.jsx'

const Hero = () => {

  const { navigate, disasterData, volunteersData } = useContext(AppContext)

  return (
    <div className='lg:mx-28 md:mx-10 sm:mx-10 mx-3 py-8'>
      <div className='flex gap-20 items-center justify-center'>
        <div className='flex flex-col items-center'>
          <h2 className='font-semibold sm:text-lg'>Disaster Registered</h2>
          <div className='w-24 h-24 border-[8px] border-red-500/90 rounded-full flex items-center justify-center text-3xl font-bold leading-none overflow-hidden mt-2'>
            <p>{disasterData.length}</p>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <h2 className='font-semibold sm:text-lg'>Volunteer Registered</h2>
          <div className='w-24 h-24 border-[8px] border-green-600/90 rounded-full flex items-center justify-center text-3xl font-bold leading-none overflow-hidden mt-2'>
            <p>{volunteersData.length}</p>
          </div>
        </div>

      </div>

      <div className='grid sm:grid-cols-2 grid-cols-2 md:gap-4 sm:gap-4 gap-2 mx-auto xl:w-[60%] md:w-[80%] sm:w-full mt-20 font-semibold text-lg text-center'>

        <div onClick={() => navigate("/reportdisaster")} className='bg-green-100/70 p-5 flex flex-col items-center justify-center gap-1 cursor-pointer'>
          <img className='w-[19%]' src={assets.disaster_icon} alt="" />
          <h3>Report Disaster</h3>
        </div>

        <div onClick={() => navigate("/disasterreported")} className='bg-green-100/70 p-5 flex flex-col items-center justify-center gap-1 cursor-pointer'>
          <img className='w-[22%]' src={assets.reported_icon} alt="" />
          <h3>Disaster Reported</h3>
        </div>

        <div onClick={() => navigate("/volunteerregistration")} className='bg-green-100/70 p-5 xl:p-6 flex flex-col items-center justify-center gap-1 cursor-pointer'>
          <img className='w-[20%]' src={assets.registration_2_icon} alt="" />
          <h3>Volunteer Registration</h3>
        </div>

        <div onClick={() => navigate("/volunteerregistered")} className='bg-green-100/70 p-5 xl:p-6 flex flex-col items-center justify-center gap-1 cursor-pointer'>
          <img className='w-[20%]' src={assets.volunteer_icon} alt="" />
          <h3>Volunteer Registered</h3>
        </div>

      </div>

    </div>
  )
}

export default Hero