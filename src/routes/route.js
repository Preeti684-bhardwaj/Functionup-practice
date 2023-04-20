const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const newRouter=require('lodash')


const commonFile = require('./common')
const loggerFile=require('../../src/logger/logger.js')
const helperFile=require('../../src/util/helper.js')
const formatterFile=require('../../src/validator/formatter.js')

router.get('/test-me', function (req, res) {
    res.send('Today we are solving problem on node.js module!');
     loggerFile.welcome();
    // console.log(helperFile.printDate());
     helperFile.printDate();
     helperFile.printMonth();
     helperFile.getBatchInfo();
     formatterFile.trimUp();
     formatterFile.changetoLowerCase();
     formatterFile.changetoUpperCase();

     let chunky =newRouter.chunk(["January","February","march","April","May","June","July","August","September","October","November","December"],3);
     console.log(chunky);

     let tailBuddy=newRouter.tail([1,3,5,7,9,11,13,15,17,19]);
     console.log(tailBuddy);

     let array1=[3,7,5,2];
     let array2=[8,10,15,3];
     let array3=[7,11,25,4];
     let array4=[0,14,11,6];
     let array5=[1,5,9,8];
     let unification=newRouter.union( array1, array2, array3, array4, array5);
     console.log(unification);

     let pairing=[ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
     let usePair=newRouter.fromPairs(pairing);
     console.log(usePair);

     
     
     
});



module.exports = router;