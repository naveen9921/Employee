

import express from 'express' ;
import bodyParser from'body-parser'
import router from './router/router.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());
app.use('/api/user',  router);
const port = process.env.PORT;
app.listen(port, () => console.log(`server running at ${port}`));

export default app;   