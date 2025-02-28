import express from 'express';
import { disastersReported, reportDisaster } from '../controllers/reportDisasterController.js';
import upload from '../middleware/multer.js';


const reportDisasterRouter = express.Router();

reportDisasterRouter.post('/reportDisaster', upload.fields([
  {
    name: 'image1', maxCount: 1,
  },
  {
    name: 'image2', maxCount: 1,
  },
  {
    name: 'image3', maxCount: 1,
  },
  {
    name: 'image4', maxCount: 1,
  },
  {
    name: 'image5', maxCount: 1,
  },
  {
    name: 'image6', maxCount: 1,
  }
  
]), reportDisaster)

reportDisasterRouter.get('/disastersData', disastersReported)

export default reportDisasterRouter;