require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const passport     = require('./config/passport');
const session      = require('express-session');
const cors         = require('cors');


mongoose
  .connect( process.env.DB ||'mongodb://localhost/server', {useNewUrlParser: true, useUnifiedTopology: true} )
  .then(x => console.log('Connected to Mongo!'))
  .catch(err => console.error('Error connecting to mongo', err));

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(
  cors({
    credentials: true,
    origin:'*'
  })
);


app.use(
  session({
    secret:process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: { httpOnly: false }
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


const index = require('./routes/index');
app.use('/', index);

const museum = require('./routes/museum');
app.use('/museum', museum);

const hall = require('./routes/hall');
app.use('/hall', hall);

const artwork = require('./routes/artwork');
app.use('/artwork', artwork);


module.exports = app;
