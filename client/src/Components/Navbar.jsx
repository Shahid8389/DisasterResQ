import React, { useContext } from 'react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../Context/AppContext'

const Navbar = () => {

  const { navigate } = useContext(AppContext)

  const { openSignIn } = useClerk()
  const { user } = useUser()


  return (
    <div>
      <div className='flex gap-3 justify-between lg:px-28 sm:px-20 px-10 items-center sm:py-3 py-1 shadow'>

        <h1 onClick={() => navigate("/")} className='sm:text-3xl text-2xl font-semibold text-green-700/90 cursor-pointer'>
          DisasterResQ
        </h1>

        {
          user ?
            <div className='flex gap-3 items-center'>
              <p>Hello, {user.username}</p>
              <UserButton />
            </div>
            :
            <div className='flex gap-3 items-center'>
              <button onClick={() => openSignIn()} className='border rounded-full py-1 px-5 bg-green-700/95 text-white'>Log In</button>
            </div>
        }

      </div>
    </div>
  )
}

export default Navbar