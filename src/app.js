const express = require('express');
const app = express();

app.use(express.json());


//Complete below given Middleware function which check whether number provided in api as params is odd or Even.

const checkIsOdd = (req, res, next) => {
  const { num } = req.query;
  const isOdd = Number(num) % 2 !== 0;
  req.query.isOdd = isOdd;
  next();
};

//Complete below given Middleware function which adds 2 to a number provided in api as params.

const add2 = (req, res, next) => {
  const { num } = req.query;
  req.query.num = Number(num) + 2;
  next();
};

/*

Example :- 
GET Reqest of API  '/?num=18' --> The router should return {"num": "20","isOdd":false}

*/

//app.get('/', add2, CheckisOdd, (req, res) => {

    //num in data should be replaced by (num query + 2) from the get request route
    //isOdd in data should be replaced by whether (num query + 2) is odd or even if it odd make it true else false 
  //  const data = {
      //  "num" : "20",
      //  "isOdd" : false
   // };
  //  res.send(JSON.stringify(data));
//});
app.get("/", add2, checkIsOdd, (req, res) => {
  const { num, isOdd } = req.query;
  const data = { num, isOdd };
  res.json(data);
});

module.exports = app;
