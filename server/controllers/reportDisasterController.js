import { v2 as cloudinary } from "cloudinary";
import reportDisasterModel from "../models/reportDisasterModel.js";


const reportDisaster = async (req, res) => {
  try {

    const { typeOfDisaster, disasterLocation } = req.body;

    const image1 = req.files.image1 && req.files.image1[0]
    const image2 = req.files.image2 && req.files.image2[0]
    const image3 = req.files.image3 && req.files.image3[0]
    const image4 = req.files.image4 && req.files.image4[0]
    const image5 = req.files.image5 && req.files.image5[0]
    const image6 = req.files.image6 && req.files.image6[0]

    const disasterImages = [image1, image2, image3, image4, image5, image6].filter(image => image !== undefined)

    let imagesUrl = await Promise.all(

      disasterImages.map(async (image) => {

        try {
          let result = await cloudinary.uploader.upload(image.path, {
            folder: "DisasterResQ",
            resource_type: "image"
          })

          return result.secure_url;

        } catch (error) {
          console.log(`Error: while uploading image:${image} to the cloudinary, `, error)

          return res.json({
            success: false,
            message: error.message
          })
        }
      })
    )

    const disasterData = {
      typeOfDisaster,
      disasterLocation,
      disasterImages: imagesUrl,
      reportedAt: Date.now()
    }

    const data = new reportDisasterModel(disasterData)
    await data.save();

    res.json({
      success: true,
      message: "Disaster reported successfully"
    })

  } catch (error) {
    console.log("Error in reportDisasterController: ", error);

    res.json({
      success: false,
      message: error.message
    })
  }
}


const disastersReported = async (req, res) => {
  try {

    const data = await reportDisasterModel.find({})

    res.json({
      success: true,
      disasters: data
    })

  } catch (error) {
    console.log("Error: while getting the disasters data from the mongoDB: ", error);

    res.json({
      success: false,
      message: error.message
    })
  }
}

export { reportDisaster, disastersReported }