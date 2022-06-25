const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

require("dotenv").config({ path: "./config.env" })


const port = process.env.PORT 

//Mongoose
const mongoose = require("mongoose")
const Portfolio = require("./Schemas/portfolioSchema")



mongoose.connect(process.env.MONGO_URI, (err) => { if(!err) console.log("Connected to Mongo using mongoose")})

//Automated
const theverge = new Portfolio({
    portfolio_name: "theverge",
    thumbnail_image: "https://github.com/ajstun/arunjayakumar.com/blob/bad8194f31d2b2678d715aaea4cf73f561cb8a3c/client/src/images/Screenshot.png",
    features: [
        F01 = {
            key: "01",
            image_url: "examplesImageURL",
            heading: "Beautiful Menu Selectors",
        },
        F02 = {
            key: "02",
            image_url: "examplesImageURL2",
            heading: "Animations;",
        }
    ],
    bts: {
        B01: {
            image_url: "examplesImageURL",
            heading: "Beautiful Menu Selectors",
        },
        B02: {
            image_url: "examplesImageURL2",
            heading: "Animations;",
        }
    },
    visit: "www.google.co.in"
})



// theverge.save((err, res) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log(res)
//     }
// })





app.get('/', (req, res) => {
    
    async function getPortfolios() {
        let data = await Portfolio.find({}, ['portfolio_name', 'thumbnail_image', 'visit'])
        res.json(data)
        console.log(data)
    }

    getPortfolios()
})

app.get('/features/:portfolio_name', (req, res) => {

    async function getFeatures() {
        let portfolio_name = req.params['portfolio_name']
        let data = await Portfolio.find({}, ['features'])
        
        res.json(data)
        console.log(data)
        
        
    
    }


    getFeatures()

    //res.end()
    
})

app.get('/bts/:portfolio_name', (req, res) => {

    async function getBts() {
        let portfolio_name = req.params['portfolio_name']
        let data = await Portfolio.find({}, ['bts'])
        res.json(data)
        console.log(data)
        
        
    
    }


    getBts()

    //res.end()
    
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

