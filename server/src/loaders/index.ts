import express from 'express';
import expressLoader from './express';
import dbLoader from './db';
import diLoader from './di';
import models from '../models';


export default async ({ app }: { app: express.Application }) => {
    try {
        await dbLoader();
        console.log('🚀 Database is loaded successfully');


        diLoader({ models });
        console.log('🚀 Dependancies are loaded');
        
        expressLoader({ app });
    } catch(error) {
        console.log(error);
    }
}