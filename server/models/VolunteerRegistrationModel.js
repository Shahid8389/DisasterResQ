import mongoose from "mongoose";

const volunteerRegisSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  address: { type: String, required: true },
  interest: { type: String, required: true },
})

const volunteerRegistered = mongoose.models.Volunteers || mongoose.model('Volunteers', volunteerRegisSchema);

export default volunteerRegistered;