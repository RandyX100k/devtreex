import express from 'express';
import router from './routing';

const app = express();

app.use('/',router);

export default app