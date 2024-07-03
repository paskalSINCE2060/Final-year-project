import React, { useState } from 'react'
import './createService.css'
import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

function CreateService() {
    const [image, setImage] = useState({})
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("")

    const handleImageSelect = (event) => {
        const selectedFile = event.target.files[0]
        if (selectedFile) {
            setImage(selectedFile)
        }
    }

    const handleSubmit = async () => {
        const formData = new FormData()
        if (image) {
            formData.append("image", image)
            formData.append("title", title)
            formData.append("rating", rating)
            formData.append("price", price)
            formData.append("description", description)
        }


        const res = await axios.post(`${baseUrl}/create-service`, formData)
        if (res.status === 200) {
            window.location.reload()
        }
    }



    return (
        <>
            <div class="form-container">
                <form>
                    <div class="upload-box">
                        <label for="file-upload" class="custom-file-upload">Click to upload </label>
                        <input
                            id="file-upload"
                            type="file"
                            accept=".jpg, .jpeg, png"
                            onChange={(event) => { handleImageSelect(event) }}
                        />
                    </div>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="text" id="price" name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <label for="rating">Rating</label>
                        <input type="text" id="rating" name="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea id="description" name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" class="submit-btn" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default CreateService