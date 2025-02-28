import volunteerRegistrationModel from "../models/VolunteerRegistrationModel.js";


const voluteerRegistration = async (req, res) => {
  try {

    const { name, email, phone, country, state, district, address, interest } = req.body;

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

    const data = new volunteerRegistrationModel(volunteerData)
    await data.save();

    res.json({
      success: true,
      message: "Volunteer Registered successfully"
    })
    
  } catch (error) {
    console.log("Error in volunteerRegisController: ", error);

    res.json({
      success: false,
      message: error.message
    })
  }
}

const ListOfVolunteers = async (req, res) => {
  try {

    const data = await volunteerRegistrationModel.find({})

    res.json({
      success: true,
      volunteers: data
    })

  } catch (error) {
    console.log("Error: while getting the volunteers data from the mongoDB: ", error);

    res.json({
      success: false,
      message: error.message
    })
  }
}

export { voluteerRegistration, ListOfVolunteers }