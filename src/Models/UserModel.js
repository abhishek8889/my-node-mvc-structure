const mongoose = require("mongoose");

const enum_registered_from = ["web", "app", "admin"];
const enum_gender = ["male", "female", "other"];
const userSchema = new mongoose.Schema(
    {
        user_name: { 
            type: String,
            required: false,
            trim: true
        },
        name: { 
            type: String,
            required: true,
            trim: true
        },
        first_name: { 
            type: String,
            required: true,
            trim: true
        },
        middle_name: { 
            type: String,
            required: true,
            trim: true
        },
        last_name: { 
            type: String,
            required: true,
            trim: true
        },
        gender: { 
            type: String, 
            enum: enum_gender, 
            required: true 
        },
        country_code: { 
            type: String, 
            required: true,
        },
        phone: { 
            type: String, 
            required: true ,
            unique: true,
            match: [/^\d+$/, "Phone number must contain only numbers"]
        },
        email: { 
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "Invalid email format"
            ]
        },
        password: {
            type: String,
            required: true,
        },
        profile_image: {
            type: String,
            required: true,
        },
        registered_from: {
            type: String,
            enum: enum_registered_from,
            required: true,
        },
        fcm_id: {
            type: String,
            required: false,
        },
        apn_token : {
            type: String,
            required: false,
        },
        email_verified_at : {
            type: Date,
            default: null,
        },
        profile_type: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

// Create User Model
const User = mongoose.model("User", userSchema);

module.exports = User;
