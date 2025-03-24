import express from 'express';
import * as profileController from '../controllers/profile.controller.js';
const router = express.Router();
router.get('/:id', profileController.getProfile);
router.post('/', profileController.createProfile);
router.put('/:id', profileController.updateProfile);
router.delete('/:id', profileController.deleteProfile);