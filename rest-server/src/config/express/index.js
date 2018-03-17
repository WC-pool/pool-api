import express from 'express';
import parser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import router from  '../../routes/index';

const middleware = [
  helmet(), 
  parser.json(),
  parser.urlencoded({ extended: true }),
  cors({
      allowedHeaders: 'Content-Type, authorization',
      methods: ['GET', 'POST', 'PUSH', 'DELETE', 'OPTIONS'],
  }),
];

class App {
  constructor () {
    this.express = express();
    this.mountMiddleware();
    this.mountRoutes();
  }
  
  mountMiddleware() {
    this.express.use(...middleware);
  }

  mountRoutes() {
    this.express.use('/api', router);
  }
}


export default new App();
