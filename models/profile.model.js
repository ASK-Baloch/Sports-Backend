import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: String,
    date: Date,
    location: String,
    status: String,
    rank: Number,
    rating: Number
});

const ReviewSchema = new mongoose.Schema({
    image:String,
    name: String,
    rating: Number,
    date: Date,
    description: String
});

const ProfileSchema = new mongoose.Schema({
    image: String,
    name: String,
    location: String,
    rating: Number,
    description: String,
    fullName: String,
    dob: Date,
    phone: String,
    email: String,
    country: String,
    city: String,
    pastEvents: [EventSchema],
    reviews: [ReviewSchema]
});

module.exports = mongoose.model('Profile', ProfileSchema);