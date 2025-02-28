import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../Context/AppContext'

const DisasterReported = () => {

  const { navigate, disasterData } = useContext(AppContext)

  const convertDate = (date) => {
    const d = new Date(date)
    return d.toLocaleString()
  }

  return disasterData !== undefined || disasterData !== null ? (
    <div className='py-8 xl:w-[43%] lg:w-[53%] md:w-[68%] sm:w-[83%] w-[95%] mx-auto'>

      <h1 className='font-semibold text-2xl pb-2'>Disasters Reported</h1>

      {
        disasterData.map((data, index) => (
          <div key={index} onClick={()=> navigate(`/disasterdetails/${data._id}`)} className='mt-2 bg-green-50 p-4 rounded-md cursor-pointer flex justify-between items-center'>
            <div>
              <h2>Type of Disaster: <span className='font-bold text-[#f62f2f] text-xl'>{data.typeOfDisaster}</span></h2>
              <h3>Disaster Location: <span className='font-medium text-lg'>{data.disasterLocation}</span></h3>
              <h3>Reported on: <span className='font-medium'>{convertDate(data.reportedAt)}</span></h3>
            </div>

            <img className='rotate-90 w-11 aspect-square' src={assets.up_arrow_icon} alt="Arrow-Icon" />

          </div>
        ))

      }

    </div>
  )
  : 
  <div className='mt-6 mx-10'>
    <h2 className='text-2xl'>No Disasters Reported Yet.</h2>
  </div>
}

export default DisasterReported