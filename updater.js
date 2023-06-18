// const axios = require('axios');
import axios from 'axios';
// const qs = require('qs');
import qs from 'qs';
// var cron = require('node-cron');
import cron from 'node-cron';


const CLIENT_ID = '' // Your client id from the client you create on OAuth Consent Screen;
const CLIENT_SECRET = ''; // Your client secret from the client you create on OAuth Consent Screen

const API_KEY = ''; // Your Api key that you copy from the Dashboard in cloud.google.com;
const REFRESH_TOKEN = ''; // Your refresh_token;


  

//corn will run again updater function every 10 minutes

const updater=(async () => {  

    // Request for obtaining an access token every 30-60 mins
    try{
    let res1 = await axios
    .post(
        'https://oauth2.googleapis.com/token',
        qs.stringify({
            refresh_token: REFRESH_TOKEN,
            grant_type: 'refresh_token'
        }),
        {
            auth: {
                username: CLIENT_ID,
                password: CLIENT_SECRET
            }
        }
    );

    const token = res1.data.access_token;
    
    // Get the video informations
    
    let res2 = await axios
    .get(
        'https://www.googleapis.com/youtube/v3/videos',
        {
            params: {
                id: '', // Your YouTube Video ID
                part: 'snippet, statistics',
                key: API_KEY
            }
        },
    );
    

    let data = res2.data.items[0];

    let {categoryId, title, description, tags} = data.snippet;
    let {viewCount} = data.statistics;

    console.log(data)

    await axios
    .put(
        'https://www.googleapis.com/youtube/v3/videos?part=snippet',
        {
            id:'', // Your video ID
            snippet:{
                categoryId,
                title: `This Title is refreshing every 10 minutes | This video has ${viewCount} views`,
                description,
                tags,
            }
        },
        {
            headers: {
                authorization: 'Bearer ' + token
            }
        }
    );
  }catch (error) {
    console.log(error);
  }
 });


export default updater;