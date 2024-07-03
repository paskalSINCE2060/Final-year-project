const ServicesModel = require("../02-models/03-servicesSchema")
const CreateService = async (req, res) => {
    try {
        if (!req.file) {
            res.status(400).json({
                msg: "File not received."
            })
        } else {
            const reqBodyWithImage = {
                ...req.body,
                image: req.file.filename
            }
            const data = await ServicesModel.create(reqBodyWithImage)
            if (data) {
                res.status(200).json({
                    msg: "Service created successfully."
                })
            } else {
                res.status(403).json({
                    msg: "Failed to add service."
                })
            }
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Internal server error"
        })
    }

}

const GetServices = async (req, res) => {
    try {
        const data = await ServicesModel.find()
        if (data) {
            res.status(200).json({
                data
            })
        } else {
            res.status(404).json({
                msg: "Failed to get data."
            })
        }
    } catch (error) { console.log(error) }
}

const GetOneService = async (req, res) => {
}

const EditService = async (req, res) => {
}

const DeleteService = async (req, res) => {
}

exports.CreateService = CreateService
exports.GetServices = GetServices
exports.GetOneService = GetOneService
exports.EditService = EditService
exports.DeleteService = DeleteService