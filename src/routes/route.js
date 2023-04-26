const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]

 router.post('/votingStatus',function(req, res){
   const votingAge= req.query.votingAge;

   const eligiblePersons = persons.filter((person)=>{
       if(person.age >= votingAge){
           person.votingStatus = true
       }

       return person
   })

   const votingPersons = []
   eligiblePersons.map((person)=>{
       if(person.votingStatus===true){
           votingPersons.push(person.name)
       }
   })

   res.send({listOfVoters:votingPersons, eligiblePersons:eligiblePersons})
})



module.exports = router;
