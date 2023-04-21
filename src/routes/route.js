const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const myUnderscore = require('underscore')

// router.get('/test-me', function (req, res) {
//     res.send('This should be working!')
// });

// router.get('/test-you', function (req, res) {
//     console.log('The exported module is: ',commonFile)
//     commonFile.doSomething()
//     console.log('This is the constant I created', commonFile.name)
//     res.send('Hello there, welcome to this application!')
// });

// router.get('/test-underscore', function(req, res){
//     let result = myUnderscore.first([11,12,23,44,15], 4)
//     console.log('the result is',result)
//     res.send('done')
// })

// router.get('/cohorts', function (request, response){
//     // logic to get the cohorts from database
//     // logic tp get only the active cohorts
//     // logic to get only the cohort with a size than 50
//     // logic to get only the backend cohorts
//     response.send(['technetium','nobelium'])
// })

// router.get('/students', function(req, res){
//     // receive or access the query params in the code
//     // write a logic on these query params
//     // city, score
//     console.log(req.query)
//     let requestedCity = req.query.city
//     let sortField = req.query.sort
//     // logic to get students
//     res.send(["Sabiha","Neha","Akash","Sonali"])
// })

// router.get('/students/:studentName', function(req, res) {
//     console.log(req.params.studentName)
//     /// go to database and search for studentName student
//     // store the data found in this variable - studentDetails
//     //res.send({data: studentDetails})
//     res.send('student data')
// })

const array=["3-Idiots","Avenger:Endgame","Lord of rings","Thor ragnakor"]
router.get('/movies',function(req,res){
    res.send(array)
})

router.get('/movies/:indexNumber',function(req ,res){
    res.send("you can see the specific movie name through index")
    // console.log(array[req.params.indexNumber])

    if((req.params.indexNumber<array.length)&&(req.params.indexNumber>-1)){
        console.log(array[req.params.indexNumber])
    }else{
        console.log("use a valid index")
    }
})

const filmName=[ {
    id: 1,
    name: "The Shining"
   }, {
    id: 2,
    name: "Incendies"
   }, {
    id: 3,
    name: "Rang de Basanti"
   }, {
    id: 4,
    name: "Finding Nemo"
   }]
   

router.get('/films',function(req,res){
    res.send(filmName)
})

router.get('/films/:filmId',function(req,res){
    res.send("you can see specific film name with id through valid index")
    if((req.params.filmId<filmName.length)&&(req.params.filmId>-1)){
        console.log(filmName[req.params.filmId])
    }else{
        console.log("No movie exists with this id")
    }
})




module.exports = router;