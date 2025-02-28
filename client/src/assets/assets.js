
import disaster_icon from '../assets/disaster_icon.png'
import address_icon from '../assets/address.png'
import alert_icon from '../assets/alert.png'
import home_icon from '../assets/home.png'
import images_icon from '../assets/images.png'
import images_2_icon from '../assets/images_2.png'
import left_arrow_icon from '../assets/left_arrow.png'
import right_arrow_icon from '../assets/right_arrow.png'
import location_icon from '../assets/location.png'
import map_icon from '../assets/map.png'
import registration_icon from '../assets/registration.png'
import registration_2_icon from '../assets/registration_2.png'
import rupee_icon from '../assets/rupee.png'
import rupee_2_icon from '../assets/rupee_2.png'
import user_icon from '../assets/user.png'
import volunteer_icon from '../assets/volunteer.png'
import reported_icon from '../assets/reported.png'
import work_icon from '../assets/work.png'
import up_arrow_icon from '../assets/up_arrow.png'
import down_arrow_icon from '../assets/down_arrow.png'
import left_slide_icon from '../assets/left_slide.png'
import right_slide_icon from '../assets/right_slide.png'

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'


export const assets = {
  disaster_icon,
  address_icon,
  alert_icon,
  home_icon,
  images_icon,
  images_2_icon,
  left_arrow_icon,
  right_arrow_icon,
  location_icon,
  map_icon,
  registration_icon,
  registration_2_icon,
  rupee_icon,
  rupee_2_icon,
  user_icon,
  volunteer_icon,
  reported_icon,
  work_icon,
  up_arrow_icon,
  down_arrow_icon,
  left_slide_icon,
  right_slide_icon,

  img1,
  img2,
  img3,
  img4,
  img5
}

// Disclaimer: This dataset contains fictional disaster data for testing and demonstration purposes only. 
// It does not reflect real-world events.
export const disasterData = [
  {
    _id: "1",
    typeOfDisaster: "Earthquake",
    disasterLocation: "Delhi, India",
    reportedAt: 1709030400000,
    disasterImages: [img1]
  },
  {
    _id: "2",
    typeOfDisaster: "Flood",
    disasterLocation: "Jakarta, Indonesia",
    reportedAt: 1709126800000,
    disasterImages: [img2]
  },
  {
    _id: "3",
    typeOfDisaster: "Volcanic Eruption",
    disasterLocation: "Bali, Indonesia",
    reportedAt: 1709898000000,
    disasterImages: [img3]
  },
  {
    _id: "4",
    typeOfDisaster: "Cyclone",
    disasterLocation: "Odisha, India",
    reportedAt: 1709319600000,
    disasterImages: [img4]
  },
  {
    _id: "5",
    typeOfDisaster: "Landslide",
    disasterLocation: "Kathmandu, Nepal",
    reportedAt: 1709512400000,
    disasterImages: [img5]
  }

]

// Disclaimer: This dataset contains fictional volunteer data for testing and demonstration purposes only. 
// These are not real individuals.
export const volunteersData = [

  {
    _id: "1",
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    phone: "9876543210",
    country: "India",
    state: "Maharashtra",
    district: "Pune",
    address: "123, MG Road, Pune",
    interest: "Disaster, Relief, Volunteering"
  },
  {
    _id: "2",
    name: "Priya Verma",
    email: "priya.verma@example.com",
    phone: "9876543210",
    country: "India",
    state: "Karnataka",
    district: "Bangalore",
    address: "456, Whitefield, Bangalore",
    interest: "Medical Assistance"
  },
  {
    _id: "3",
    name: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "9876543210",
    country: "India",
    state: "Uttar Pradesh",
    district: "Lucknow",
    address: "789, Gomti Nagar, Lucknow",
    interest: "Food and Shelter Support"
  },
  {
    _id: "4",
    name: "Neha Patel",
    email: "neha.patel@example.com",
    phone: "9876543210",
    country: "India",
    state: "Gujarat",
    district: "Ahmedabad",
    address: "101, SG Highway, Ahmedabad",
    interest: "Child Care Assistance"
  },
  {
    _id: "5",
    name: "Vikram Rao",
    email: "vikram.rao@example.com",
    phone: "9876543210",
    country: "India",
    state: "Tamil Nadu",
    district: "Chennai",
    address: "222, T Nagar, Chennai",
    interest: "Rescue Operations"
  }

]