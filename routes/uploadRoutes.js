import express from 'express';
import upload from '../middleware/upload.js';
import uploadController from '../controllers/uploadController.js';

const router = express.Router();

router.post('/', 
    upload.single('file'), // middleware to handle single file upload with field name 'file'
    uploadController.uploadFile // controller to handle the uploaded file
);

export default router;