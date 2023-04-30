// require('dotenv').config()
const bodyParser= require('body-parser'); 
const express = require('express');
const cors = require('cors'); 
// const routes = require('./routes/routes');
const routes = require('./routes/route');
const authRoutes = require('./routes/auth')
const cookieSession = require('cookie-session');  
const passport =require('passport');
const connectDB = require('./database/dbConn');    

const cookieParser = require('cookie-parser');
  
var schedule = require('node-schedule');  
const {addOrderReport} = require('./controller/orderReportController');

const dotenv = require('dotenv');

dotenv.config();

const app = express();


connectDB();

app.use(cookieSession({
    name: "session",
    keys: ["cookies"],
    maxAge: 24*60*60*100,
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

  next();
});

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use(cookieParser());
app.use(cors());
 
app.use('/time', (req, res) => {
  res.send("time flies");
});

app.use('/api', routes);
// app.use('/auth' , authRoutes);

 
app.use('/', (req, res) => {
  res.send(" horuke");
});

// schedule.scheduleJob('0 44 23 * * * ', function(){
//   console.log('The answer to life, the universe, and everything!');
//   addOrderReport(); 
// });

// app.use('/analysis', addOrderReport);


const port = process.env.PORT || 5000

app.listen(process.env.PORT || 5000 , () => 
console.log(`server running on port ${port}`)
)


// //to deploy the project on heroku
// if(process.env.NODE_ENV === "production"){
//  app.use(express.static(__dirname + '/'));
// }
// //to deploy the project on heroku
// if(process.env.NODE_ENV === "developer"){
//  app.use(express.static(__dirname + '/'));
// }