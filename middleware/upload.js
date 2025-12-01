import multer from "multer";    
import {v4 as uuidv4 } from "uuid";

// Set up storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) { // specify the destination directory
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) { // specify the filename
        const uniqueSuffix = uuidv4() + ".md";
        cb(null, uniqueSuffix);
    }
});

// File filter to accept only markdown files
function fileFilter (req, file, cb) {
    if (file.mimetype !== "text/markdown") {
        return cb(new Error('Only markdown files are allowed!'), false); // reject the file
    }
    cb(null, true);
}

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter // apply the file filter
}); // create the multer instance with the storage engine

export default upload;