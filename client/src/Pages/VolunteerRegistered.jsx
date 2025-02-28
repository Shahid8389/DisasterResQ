import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../Context/AppContext'

const VolunteerRegistrated = () => {

  const { volunteersData } = useContext(AppContext)
  const [visible, setVisible] = useState({})

  const showDetails = (id) => {
    setVisible(prev => ({ ...prev, [id]: !(prev[id]) }))
  }


  return volunteersData !== undefined || volunteersData !== null ? (
    <div className='py-4 xl:w-[40%] lg:w-[48%] md:w-[60%] sm:w-[70%] w-[88%] mx-auto'>
      <h1 className='font-semibold text-2xl pb-2'>Available Volunteers</h1>

      {
        volunteersData.map((data, index) => (
          <div key={index} className='mt-2 bg-green-50 p-4 rounded-md flex justify-between items-start'>
            <div>
              <h2>Name: <span className='font-bold text-[#346d1e] text-lg'>{data.name}</span></h2>
              <h3>Location: <span className='font-medium text-base'>{data.district}, {data.state}, {data.country}</span></h3>
              <h3>Phone number: <span className='font-medium'>{data.phone}</span></h3>

              {
                visible[data._id] && (
                  <div>
                    <h3 className='mt-0.5'>Email Address: <span className='font-medium'>{data.email}</span></h3>
                    <h3>Address: <span className='font-medium'>{data.address}</span></h3>
                    <h3>Interest to work in: <span className='font-medium'>{data.interest}</span></h3>
                  </div>
                )

              }

            </div>

            {
              visible[data._id] === false || visible[data._id] === undefined ? (
                <img onClick={() => showDetails(data._id)} className='w-8 aspect-square pr-2 cursor-pointer mt-6' src={assets.down_arrow_icon} alt="Arrow-Icon" />
              )
                :
                (
                  <img onClick={() => showDetails(data._id)} className='w-8 aspect-square pr-2 cursor-pointer mt-6' src={assets.up_arrow_icon} alt="Arrow-Icon" />
                )
            }

          </div>
        ))
      }
    </div>
  )
  : 
  <div className='mt-6 mx-10'>
    <h2 className='text-2xl'>No Volunteers Registered Yet.</h2>
  </div>
}

export default VolunteerRegistrated