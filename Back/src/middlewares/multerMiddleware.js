import multer from 'multer'


const storage = multer.memoryStorage()


const fileFilter = (req, file, cb) => {
    
    if(file.mimetype.startsWith('image/')){
        cb(null, true)
    } else {
        cb(new Error('Solo se permiten imagenes'), false)
    }
}

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, 
    fileFilter: fileFilter
});

export default upload