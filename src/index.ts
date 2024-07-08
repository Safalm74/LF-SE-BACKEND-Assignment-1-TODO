import config from './config';
import express from 'express';
import indexRouter from './routes/'

const app = express();

app.use(express.json());

app.use(indexRouter);

app.listen(
    config.port,
    ()=>{
        console.log(`Listening in port ${config.port} `)
    }
);
