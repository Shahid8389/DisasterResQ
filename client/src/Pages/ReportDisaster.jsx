import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { AppContext } from '../Context/AppContext'
import axios from 'axios'


const ReportDisaster = () => {

  const { backendUrl } = useContext(AppContext)

  const [disasterLocation, setDisasterLocation] = useState('')
  const [disasterType, setDisasterType] = useState('')
  const [disasterImages, setDisasterImages] = useState([])
  

  const submitHandler = async (e) => {
    e.preventDefault()

    if (disasterImages.length === 0) {
      toast.error('Select atleast 1 image');
      return
    }

    if (disasterImages.length > 6) {
      toast.error('Maximum 6 images are allowed');
      return
    }

    console.log('Disaster Reported')

    // Sending the Disaster Data to the Backend
    try {
      const formData = new FormData();

      formData.append('disasterLocation', disasterLocation)
      formData.append('typeOfDisaster', disasterType)

      for (let i = 0; i < disasterImages.length; i++) {
        formData.append(`image${i+1}`, disasterImages[i])
      }

      const response = await axios.post(backendUrl + '/api/reportDisaster', formData)

      if (response.data.success) {
        toast.success("Disaster Reported Successfully")

        setDisasterLocation('')
        setDisasterType('')
        setDisasterImages([])

      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const fileInputHandler = (e) => {
    setDisasterImages(e.target.files)
  }


  return (
    <div className='py-14 xl:w-[35%] lg:w-[43%] md:w-[50%] sm:w-[60%] w-[80%] mx-auto'>
      <div>
        <h1 className='font-semibold text-2xl'>Report a Disaster</h1>
      </div>

      <form onSubmit={submitHandler} className='flex flex-col gap-4 mt-4'>

        <input onChange={(e) => setDisasterLocation(e.target.value)} value={disasterLocation} className='sm:w-[100%] border border-gray-400 outline-none px-4 py-1.5 rounded-md bg-green-50 placeholder-gray-700' type="text" placeholder='Enter Location of Disaster' required />

        <select onChange={(e) => setDisasterType(e.target.value)} value={disasterType} className='sm:w-[100%] border border-gray-400 outline-none px-4 py-1.5 rounded-md bg-green-50' defaultValue="" id='disasterType' name='disasterType' required>
          <option value="" disabled hidden >Select Type of Disaster</option>
          <option value="Earthquake">Earthquake</option>
          <option value="Flood">Flood</option>
          <option value="Landslide">Landslide</option>
          <option value="Volcanic-Eruption">Volcanic Eruption</option>
          <option value="Cyclone">Cyclone</option>
          <option value="Industrial-Accident">Industrial Accident</option>
          <option value="Terrorist-Attack">Terrorist Attack</option>
          <option value="Other">Other</option>
        </select>

        <div className=''>
          <label className='cursor-pointer block sm:w-[100%] border border-gray-400 outline-none px-4 py-1.5 rounded-md bg-green-50' htmlFor="fileInput">Click to add Images</label>
          <input onChange={(e) => fileInputHandler(e)} type="file" id='fileInput' multiple hidden />
          <p className='mt-1 ml-1 text-sm text-gray-900 font-medium'>Selected Images: {disasterImages.length}</p>
        </div>

        <button className='sm:w-[100%] bg-green-600 text-white font-medium mt-2 py-1.5 rounded-md' type='submit'>Report Disaster</button>
      </form>
    </div>
  )
}

export default ReportDisaster