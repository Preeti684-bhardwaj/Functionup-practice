const express = require('express');
const { route } = require('express/lib/application');
const app = express.Router();
const commonFile = require('./common')
const myUnderscore = require('underscore')
// Q1.
// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
// Your route code will look like this
app.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    ///LOGIC WILL GO HERE 
    let arr= [1,2,3,4,5,6,8]
    let n = arr.length + 1;
    let sumOfNumbers = (n * (n + 1)) / 2;
    let sumOfArray = arr.reduce((acc, num) => acc + num, 0); 
    let missingNumber = sumOfNumbers - sumOfArray; 
    
    
    res.send(  { data: missingNumber  }  );
});


// Q2. 
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
// Your route code will look like this
app.get("/sol2", function (req, res) {
        //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
        ///LOGIC WILL GO HERE 
        let arr= [33, 34, 35, 37, 38]
        let n = arr.length + 1;
  
        let first = arr[0];  
        let last = arr[arr.length - 1];   
        
        let sumOfIntegers = (n * (first + last)) / 2; 
        
        let sumOfArray = arr.reduce((acc, num) => acc + num, 0);
        let missingNumber = sumOfIntegers - sumOfArray; 

        res.send(  { data: missingNumber  }  );
});




module.exports = app;