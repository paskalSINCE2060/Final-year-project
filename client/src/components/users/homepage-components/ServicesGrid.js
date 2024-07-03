import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./servicesGrid.css"

function ServicesGrid() {
    const [services, setServices] = useState([])
    try {
        const fetchServicesList = async () => {
            const response = await axios.get("http://localhost:8000/get-services")
            if (response) {
                setServices(response.data.data)
            } else {
                console.log("Server error")
            }
        }
        useEffect(() => {
            fetchServicesList()
        }, [])

    } catch (error) {
        console.log("Failed to fetch data")
    }


    return (
        <div class="grid" >
            {services && services.map((service, index) => (
                <div class="service-card">
                    <div class='image-container'>
                        <img src={`/assets/serviceImage/${service.image}`} alt='product' />
                    </div>
                    <div class="text-container">
                        <h2>{service.title}</h2>
                        <h2>${service.price}</h2>
                        <div class="rating-container">
                            <label>Rating</label>
                            <label>{service.rating}</label>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServicesGrid