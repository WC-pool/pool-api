import http from 'http';

import App from './config/express';
import './config/database';

export const app = App.express;

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, (err) => {
  if (err) {
    console.log('Error connecting to server', err);
  } else {
    console.log('successfully connected RS to PORT: ', PORT);
  }
})