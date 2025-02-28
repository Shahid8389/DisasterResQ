import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../Context/AppContext'

const DisasterDetails = () => {

  const { id } = useParams()
  const { navigate, disasterData } = useContext(AppContext)
  const [disasterDetails, setDisasterDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  let [currentImage, setCurrentImage] = useState(0)
  

  const nextImage = () => {
    if (currentImage < disasterDetails.disasterImages.length - 1 ) {
      setCurrentImage(currentImage + 1)
    }
  }

  const prevImage = () => {
    if (currentImage > 0 ) {
      setCurrentImage(currentImage - 1)
    }
  }
  
  const convertDate = (date) => {
    const d = new Date(date)
    return d.toLocaleString()
  }

  const navigateToGoogleMaps = () => {
    const googleMapsUrl = "https://www.google.com/maps"
    window.open(googleMapsUrl, '_blank')
  }


  useEffect(() => {

    const data = disasterData.find(data => data._id === id)
    setDisasterDetails(data)
    setLoading(false)

  }, [id, disasterData])


  return loading === false && disasterDetails !== undefined ? (
    <div className='py-8 xl:w-[25%] lg:w-[33%] md:w-[40%] sm:w-[55%] w-[65%] mx-auto'>
      <h1 className='font-semibold text-2xl pb-2'>Disaster Details</h1>

      <div className='mt-3 flex flex-col items-center justify-center'>
        <div>
          <img className='' src={disasterDetails.disasterImages[currentImage]} alt="" />
          <p className='text-sm'>Images: {currentImage+1} of {disasterDetails.disasterImages.length}</p>
        </div>

        <div className='flex items-center justify-center gap-4 mt-3'>
          <img onClick={()=> prevImage()} className='w-[25%] cursor-pointer hover:scale-105' src={assets.left_slide_icon} alt="" />
          <img onClick={()=> nextImage()} className='w-[25%] cursor-pointer hover:scale-105' src={assets.right_slide_icon} alt="" />
        </div>
      </div>

      <div>
        <h2 className='text-xl pb-4 pt-8'>Information about the Reported Disaster</h2>

        <h2>Disaster Type:- <span className='font-semibold text-xl'>{disasterDetails.typeOfDisaster}</span></h2>
        <h3>Location:- <span className='font-medium text-lg'>{disasterDetails.disasterLocation}</span></h3>
        <h3>Reported on:- <span className='font-medium'>{convertDate(disasterDetails.reportedAt)}</span></h3>
      </div>

      <div className='mt-8'>
        <h3 className='text-lg'>Select your interest to work in:</h3>

        <div className='flex justify-between gap-10 xl:w-[67%] lg:w-[46%] w-[60%] mt-2 px-2'>
          <button onClick={()=> navigateToGoogleMaps()} className='bg-green-600 text-white py-1.5 px-4 rounded-full'>Physical</button>
          <button onClick={()=> navigate("/payment")} className='bg-green-600 text-white py-1.5 px-4 rounded-full'>Financial</button>
        </div>
      </div>

    </div>

  )
    :
    (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-green-700 rounded-full animate-spin"></div>
      </div>
    )
}

export default DisasterDetails