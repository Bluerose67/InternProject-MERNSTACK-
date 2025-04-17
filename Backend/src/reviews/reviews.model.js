const { Schema, default: mongoose } = require('mongoose');

const ReviewSchema = new Schema({
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Products", required: true },
}, { timestamps: true });


const Reviews = mongoose.models.Reviews || mongoose.model("Reviews", ReviewSchema);

module.exports = Reviews;
