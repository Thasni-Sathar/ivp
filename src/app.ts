import express, { Application, Request, Response } from 'express'
import db from './config/database';
const  router  = require( './routes/index');
const dbCreate = require('./models/index');
const bodyParser = require('body-parser');
const cors = require('cors');
const isDev = process.env.NODE_ENV === 'development'
const app: Application = express();


/** Parse the request */
app.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
app.use(express.json());

app.use(cors("*"));
app.use('/', router);

const start = async (): Promise<void> => {
    try {
      await db.sync({alter :true});
      app.listen(4000, () => {
        console.log("Server started on port 4000");
      });

    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  


  void start();