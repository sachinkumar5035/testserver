import express from 'express';
import dotenv from 'dotenv';

dotenv.config({
    path:"./Data/config.env"
})

const app = express();

export default app;