import express from 'express';
import { ListOfVolunteers, voluteerRegistration } from '../controllers/volunteerRegisController.js';


const volunteerRegisRouter = express.Router();

volunteerRegisRouter.post('/volunteerRegistration', voluteerRegistration)

volunteerRegisRouter.get('/registeredVolunteers', ListOfVolunteers)

export default volunteerRegisRouter;