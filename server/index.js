const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true
    })
)

mongoose.connect('mongodb+srv://avizaanandya12:viza1209@viza.a3ss1ou.mongodb.net/tokopediaPlay')

const VideoSchema = mongoose.Schema({
    video_id:Number,
    img: String,
    link: String,
    title:String,
    prod_photo:String
})

const ArtistModel = mongoose.model("videos", VideoSchema)

app.get('/getVideos',(req,res) =>{
    ArtistModel.find({})
    .then(function(videos){
        res.json(videos)
    }).catch(function(err){
        console.log(err)
    })
})

// app.post('/postNew',(req,res)=>{
//     const a = new ArtistModel({
//         name: req.body.name,
//         year_of_debut: req.body.year_of_debut,
//         genre:req.body.genre
//     })

//     try {
//         const artistToSave = a.save();
//         res.json(artistToSave)
//     } catch (error) {
//         res.json({message: error.message})
//     }
// })

app.listen(3001,()=>{
    console.log('tes 1 2 3')
})
