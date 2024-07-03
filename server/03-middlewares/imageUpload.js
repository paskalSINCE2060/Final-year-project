const multer = require('multer')

// SERVICE IMAGES
const serviceImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/public/assets/serviceImage/")
    },
    filename: function (req, file, cb) {
        cb(null, "service_image_" + Date.now() + ".jpg") 
    }
})

const serviceImageUpload = multer({
    storage: serviceImageStorage
}).single("image")

exports.serviceImageUpload = serviceImageUpload