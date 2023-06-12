# YouTube View Counter

A YouTube bot that will update the video title to match the view count.

Here’s the original YouTube video: https://www.youtube.com/watch?v=BxV14h0kFs0

And here’s my copy: https://www.youtube.com/watch?v=yza3FfiMupM

For now, my script is running as a cron job ervery 10 minutes (in order to stay under the 10,000 "units" per day limit).

## Screenshots
<img width="429" alt="Screenshot 2023-06-12 164653" src="https://github.com/lalitkumawat1m/YoutubeViewCounter/assets/91591901/9a23fd27-97bc-45fa-9b2a-7f09de30d87d">

❤️ Found this project useful? If you found this project useful, then please consider giving it a ⭐ on Github and sharing it with your friends via social media.


## Video About OAuth2 from EngineerMan
https://www.youtube.com/watch?v=j-bHvqQ378s&ab_channel=EngineerMan


## Project Setup
Clone the repo locally
```bash
  git clone 
```

Install the dependencies (via Yarn, or npm)
```bash
  npm install 
```
## Setup YouTube API
A lof of the code is copied over from https://developers.google.com/youtube/v3/quickstart/nodejs

1. Log into the Google Developers Console:
   https://console.developers.google.com/


2. Create New Project
   On the right side you should see a button to create a new project.
   I'll name mine "Youtube View Counter"
   Next, click "Create".


3. Enable the YouTube Data API v3
   Click the "Enable APIs and Services" button

   Search for "YouTube" and then enable the "YouTube Data API v3"


4. Generate Credentials
   Click the "Create Credentails" button and the select the following:

   Which API are you using?

   YouTube Data API v3
   Where will you be calling the API from?

   Other UI (eg: Windows, CLI tool)
   What data will you be accessing?

   User data


5. Set up consent screen
   Select "External" for the User Type

### Fill out your Application Name, then hit "Save" at the very bottom

## In your console.cloud.google.com Complete The Steps
![](https://i.imgur.com/auZWeFl.png)
![](https://i.imgur.com/jJg1hXd.png)
![](https://i.imgur.com/2mCYzaJ.png)
![](https://i.imgur.com/ebTFytw.png)
![](https://i.imgur.com/ZzEjy7K.png)
![](https://i.imgur.com/IPKJxmJ.png)

## Fill out the Fields and run with node token.js
### Click on the link and authorize the App:
![](https://i.imgur.com/rNIuTnD.png)

## After that you get your token to fill out the .gettoken() in token.js
![](https://i.imgur.com/ZooGv3l.png)

## run node token.js again
### Output to get the REFRESH_TOKEN for updater.js: 
![](https://i.imgur.com/kr4YO81.png)


## After that fill out the updater.js with your Infos
## run node updater.js
### You will get your new access token every time you call node updater.js
## Fill in the YT Video ID and You are good to go!

## node-corn 
### To automatically run the bot, you can setup a cron job that calls the script.

YouTube API limits
By defauly, YouTube gives you 10,000 "units" per day on the API.

You can also calcualte your API costs here.

So for our purposes, the two API calls are:

videos.list.statistics = 3 units

videos.update.snippet = 53 units

For a total of 56 units per invocation.

So, if I have a bucket of 10,000 per day, and it costs 56 units each time, I can run it ~178 times per day.

With 1440 minutes in a day divided by 178, we can safely run the bot about every 8 miutes. We'll round up to 10 to be safe!



