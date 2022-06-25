const { Schema, Model, default: mongoose, } = require("mongoose")

const portfolioSchema = new Schema({
    portfolio_name: String,
    thumbnail_image: String,
    features: [
        type = Map,
        of = Map
    ],
    bts: {
        type: Map,
        of: Map
    },
    visit: String
})

const Portfolio = mongoose.model('Portfolio', portfolioSchema)



module.exports = Portfolio

