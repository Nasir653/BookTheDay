"use client"

import React, { useState } from 'react'
import "./styles.css";
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        Username: '',
        Email: '',
        Password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.post("/api/register", formData)

        console.log(res);


    }

    return (
        <div className="register-container">
            <h2 className="register-title">Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <input
                    type="text"
                    placeholder="USername"
                    name="Username"
                    value={formData.Username}
                    onChange={handleChange}
                    required
                    className="register-input"
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    required
                    className="register-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="Password"
                    value={formData.Password}
                    onChange={handleChange}
                    required
                    className="register-input"
                />
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    )
}

export default Register
