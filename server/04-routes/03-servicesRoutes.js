const Express = require('express')
const router = Express.Router()

const { CreateService, GetServices } = require("../05-controllers/03-servicesController")
const { serviceImageUpload } = require("../03-middlewares/imageUpload")

router.post("/create-service",serviceImageUpload, CreateService)
router.get("/get-services", GetServices)

module.exports = router
