// package imports
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const swaggerUi = require('swagger-ui-express');

// const imports
const dbConnect = require('./config/db.connect');
const passportLocalConfigure = require('./config/passport/passport.local.config');
const passportGoogleConfig = require('./config/passport/passport.google.config');
const passportGithubConfig = require('./config/passport/passport.github.config');
const constants = require('./constants/constants');

// Routes import
const authRouter = require('./modules/auth/auth.route');

// Logger imports
const logger = require('./config/logger/logger');

// Swagger document import
const swaggerDocument = require('./swagger.json');

// creating instance
const app = express();

// Connecting database
dbConnect();

// Adding middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(
    session({
      secret: process.env.SESSION_CODE,
      resave: true,
      saveUninitialized: true,
    }),
);
app.use(cookieParser(process.env.SESSION_CODE));
app.use(passport.initialize());
app.use(passport.session());
passportLocalConfigure(passport);
passportGoogleConfig(passport);
passportGithubConfig(passport);
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument),
);

// Configuring Routes
app.use('/api/auth/', authRouter);

// Starting the application on port 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, (error) => {
  if (!error) {
    logger.info('App is successfully running on', { PORT: PORT });
  } else {
    logger.error('Error occured! Server cannot start', error);
  }
});
