const mongoose = require("mongoose")

const adminUserSchema = ({

    email: {
        type: String
    },

    password: {
        type: String
    },

    phoneNumber: {
        type: String
    },

    name: {
        type: String
    },

    userRole: {
        type: String
    },

    createdAt: {
        type: Date, default: Date.now
    },

    updatedAt: {
        type: Date, default: Date.now
    }
})

const AdminUserModel = mongoose.model("AdminUserModel", adminUserSchema)
module.exports = AdminUserModel