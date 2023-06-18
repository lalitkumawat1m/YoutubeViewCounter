import express from 'express'
import * as dotenv from 'dotenv'

import updater from './updater.js';
import cron from 'node-cron';


dotenv.config();

const app = express();

app.use(express.json({ limit: '50mb' }));


app.get('/', async (req, res) => {
    res.send("Hello from server");
})

const startServer = async () => {
    try {
        // cron will run again updater function every 10 minutes        
        cron.schedule('*/10 * * * *',updater);

        app.listen(8080, () =>
            console.log('Server has started on port http://localhost:8080'))
    } catch (e) {
        console.log(e);
    }

}
startServer();