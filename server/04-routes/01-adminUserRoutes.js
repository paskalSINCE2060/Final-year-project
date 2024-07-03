const Express = require('express')
const router = Express.Router()

const { AdminUserRegistration, AdminUserLogin } = require("../05-controllers/01-adminUserController")

router.post("/admin-signup", AdminUserRegistration)
router.post("/admin-login", AdminUserLogin)

module.exports = router
