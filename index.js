var
    twit = require('twit'),
    config = require('./config');

var Twitter = new twit(
     {
        consumer_key: 	'Your key',
        consumer_secret: 'Your key',
        access_token: 'Your key', 
        access_token_secret: 'Your key'
    }
    );
/////////////////////////////////////////////--Retweet Function--///////////////////////////////////

var retweet = function() {
    //here in var parms we have a query which is also written as 'q' 
    //which means we neeed to search tweets where there is # developer
    //and is latest one
    var params = {
        q: '#developer',  
        result_type: 'recent',
        lang: 'en'
    }
    //using 'get' rest api call and using function 'search/tweets' provided by Twitter
    //a tweet is searcherd its id get extractracted at numner 22 and get posted to twitter
    Twitter.get('search/tweets', params, function(err, data) {
      
        if (!err) {
          // extracting  the id of the tweet which is going to be retweeted
            var retweetId = data.statuses[0].id_str;
            // Retweeting 
            Twitter.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err, response) {
                if (response) {
                    console.log('Retweeted!!!');
                }
            });
        }
    });
}

/////////////////////////////////////////////--Favourite Tweet Function--///////////////////////////////////

// this is favourite teet function which seleted a random tweet 
// on behalf of random id genrated by random function
var favoriteTweet = function(){
  var params = {
      q: '#React',  
      result_type: 'recent',
      lang: 'en'
  }
  // find the tweet
  Twitter.get('search/tweets', params, function(err,data){
      // getting a random number for tweet from a random function declared at the end of the code
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet); 

    if(typeof randomTweet != 'undefined'){
      // using favourite function a new create is tweeted 
      Twitter.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        // if there was an error while 'favorite'
        if(err){
          console.log('CANNOT BE FAVORITE... Error');
        }
        else{
          console.log('FAVORITED... Success!!!');
        }
      });
    }
  });
}

/////////////////////////////////////////////--Single Tweet Function--///////////////////////////////////

var Singletweet = function(){
Twitter.post('statuses/update', {status: ' Testing Twitter API!'},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  //console.log(tweet);  // Tweet body.
  //console.log(response);  // Raw response object.
});
}



// function to generate a random tweet tweet
function ranDom (arr) {
  var index = Math.floor(Math.random()*arr.length);
  return arr[index];
};

retweet();
setInterval(retweet, 3000000);
Singletweet();
// this function call fovaourited a tweet for you a random one
favoriteTweet();
setInterval(favoriteTweet, 3600000);