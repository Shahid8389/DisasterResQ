import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import ReportDisaster from "./Pages/ReportDisaster"
import DisasterReported from "./Pages/DisasterReported"
import DisasterDetails from "./Pages/DisasterDetails"
import VolunteerRegistration from "./Pages/VolunteerRegistration"
import VolunteerRegistered from "./Pages/VolunteerRegistered"
import Navbar from "./Components/Navbar"

import { ToastContainer } from 'react-toastify';
import Payment from "./Pages/Payment"


function App() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2f4f2f3] to-[#57cb6a]">

      <ToastContainer
        autoClose={4000}
        limit={3}
        newestOnTop
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reportdisaster" element={<ReportDisaster />} />
        <Route path="/disasterreported" element={<DisasterReported />} />
        <Route path="/disasterdetails/:id" element={<DisasterDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/volunteerregistration" element={<VolunteerRegistration />} />
        <Route path="/volunteerregistered" element={<VolunteerRegistered />} />
      </Routes>
    </div>
  )
}

export default App
