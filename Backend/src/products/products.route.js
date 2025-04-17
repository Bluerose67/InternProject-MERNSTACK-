const express = require('express')
const Products = require('./products.model')
const Reviews = require('../reviews/reviews.model')
const router = express.Router()

//post a product 
router.post('/create-product', async(req, res) => {
    try {
        const newProduct = new Products({
            ...req.body
        })

        const savedProduct = await newProduct.save()
        //calculate reviews 
        const reviews = await Reviews.find({productId: savedProduct.id})
        if(reviews.length > 0) {
            const totalRating = reviews.reduce((acc, reviews) => acc + reviews.rating, 0)
            const averageRating = totalRating / reviews.length
            savedProduct.rating = averageRating
            await savedProduct.save()
        }
        res.status(201).send(savedProduct)
    } catch (error) {
        console.error("Error Creating New Products", error)
        res.status(500).send({message: "Failed to Create New Products"})
    }
})

//get all products
router.get("/", async (req, res) => {
    try {
        const {
            category, 
            color, 
            minPrice, 
            maxPrice, 
            page=1, 
            limit= 10
        } = req.query
        
        let filter = {}
        if(category && category !== "all") {
            filter.category = category
        }
        if(color && color !== "all") {
            filter.color = color
        }
        if(minPrice && maxPrice) {
            const min = parseFloat(minPrice)
            const max = parseFloat(maxPrice)
            if(!isNaN(min) && !isNaN(max)) {
                filter.price = {$gte: min, $lte: max}
            }
        }
        const skip = (parseInt(page) - 1) * parseInt(limit)
        const totalProducts = await Products.countDocuments(filter)
        const totalPages = Math.ceil(totalProducts/ parseInt(limit))
        const products =await Products.find(filter)
                        .skip(skip) 
                        .limit(parseInt(limit))
                        .populate("author", "email")
                        .sort({createdAt: -1})

        res.status(200).send({products, totalPages, totalProducts})

    } catch (error) {
        console.error("Error Fetching New Products", error)
        res.status(500).send({message: "Error Fetching New Products"})
    }
})

//get single products

module.exports = router