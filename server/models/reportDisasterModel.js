import mongoose from "mongoose";

const reportDisasterSchema = new mongoose.Schema({
  disasterLocation: { type: String, required: true },
  typeOfDisaster: { type: String, required: true },
  disasterImages: { type: Array, required: true },
  reportedAt: { type: Number, required: true },
})

const disastersReported = mongoose.models.Disasters || mongoose.model('Disasters', reportDisasterSchema);

export default disastersReported;