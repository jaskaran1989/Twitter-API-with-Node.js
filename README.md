# Twitter-API-with-Node.js
Examples of how to use twitter API with Node.js. Examples include retweeting, tweeting and Favorited through Node.js code 


# Technologies Used

* Twitter API
> Docs: https://dev.twitter.com/docs
* Node.js
# Installing
```
npm install 
npm install twit
```

# This code basically shows 4 functions form Twitter Api
```
* search/tweets (GET RestAPI call)
* statuses/retweet/:id (POST RestAPI call)
```
This function find a tweet  through 'search/tweet' function and then extract tweet's id and then pass to id in 'statuses/retweet/:id'
function which then retwets the tweet, this is POST restAPI call.

 <img src="https://github.com/jaskaran1989/Twitter-API-with-Node.js/blob/master/retweet.png" />
 ```
* favorites/create (POST RestAPI call)
```
This function randonly favourited a tweet for you, how this works is in this program there is a function creates a random id which then passs to the function url

<img src="https://github.com/jaskaran1989/Twitter-API-with-Node.js/blob/master/favrouite.png" />
```
* statuses/update (POST RestAPI call)
```
This is very simple  code which uses 'status/update' function to tweet, this is POST restAPI call.

<img src="https://github.com/jaskaran1989/Twitter-API-with-Node.js/blob/master/single.png" />


