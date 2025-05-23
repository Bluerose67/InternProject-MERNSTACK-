const {Schema, model, default: mongoose} = require('mongoose');
const ProductSchema = new Schema({
    name: {
        type: String, required: true
    },
    category: String,
    description: String,
    price: {
        type: Number, required:true
    },
    oldPrice: Number,
    image: String,
    color: String,
    rating: {
        type: Number, default: 0 
    },
    author: { type: mongoose.Types.ObjectId, ref: "User", required: true}

})

const Products = mongoose.models.Products || mongoose.model("Products", ProductSchema);
module.exports = Products