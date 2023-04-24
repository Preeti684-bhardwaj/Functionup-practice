const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();


let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ];  



   router.post('/players', function (req,res) {
       //LOGIC WILL COME HERE
        const {name,dob,gender,city,sports} = req.body;
        const existingPlayer = players.find((player) => player.name === name);
        if(existingPlayer){
            return res.send({status:false});
        }
        const newPlayer = {name,dob,gender,city,sports};
        players.push(newPlayer);                
        res.send({data:players,status:true})
      });
module.exports = router;
