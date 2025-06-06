import mongoose from "mongoose";
const ratingSchema = new mongoose.Schema({
    ratedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ratedUser: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    score: { type: Number, min: 1, max: 5, required: true },
    review: { type: String },
    timestamp: { type: Date, default: Date.now },
});

const Rating= mongoose.model('Rating',ratingSchema)
export default Rating