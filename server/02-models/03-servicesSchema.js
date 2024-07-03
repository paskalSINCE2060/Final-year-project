const mongoose = require("mongoose")

const servicesSchema = ({

    image: {
        type: String
    },

    title: {
        type: String
    },

    price: {
        type: String
    },

    rating: {
        type: String
    },

    description: {
        type: String
    },

    createdAt: {
        type: Date, default: Date.now
    },

    updatedAt: {
        type: Date, default: Date.now
    }
})

const ServicesModel = mongoose.model("ServicesModel", servicesSchema)
module.exports = ServicesModel