import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './editservice.css'

const baseUrl = process.env.REACT_APP_BASE_URL

function EditServicesGrid() {

    const [services, setServices] = useState([])
    try {
        const fetchServicesList = async () => {
            const response = await axios.get(`${baseUrl}/get-services`)
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
        <>
            <div class="cart">
                {services.map((item, index) => (
                    <div class="cart-item">
                        <div class="product">
                            < img src={`/assets/serviceImage/${item.image}`} alt="" />
                            <span>{item.title}</span>
                        </div>
                        <div class="qty">
                            <p>{item.rating}</p>
                        </div>
                        <div class="price">${item.price}</div>
                        <div class="action"><button class="remove-btn">Remove</button></div>
                    </div>
                ))

                }
            </div>
        </>
    )
}

export default EditServicesGrid