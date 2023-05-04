const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
mongoose.set('strictQuery', true);
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://bhardwajpreeti684:YQyZDhVN4TvtvSub@cluster0.cwtrept.mongodb.net/Preeti9667-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        var currDate = new Date();
        var detailDate=currDate.getDate()+"-"
        +(currDate.getMonth()+1)+"-"
        +currDate.getFullYear()+" "
        +currDate.getHours()+":"
        +currDate.getMinutes()+":"
        +currDate.getSeconds();
        var ip=req.ip
        var url=req.originalUrl;
        console.log(`${detailDate},${ip},${url}`)
        next();
  }
  );

app.use('/', route);




app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
