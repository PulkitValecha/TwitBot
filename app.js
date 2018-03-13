const TwitterPack = require('twitter')


/* Put Your Own Keys*/
const secret = {
    consumer_key: 'XXXX',
    consumer_secret:'XXXX',
    access_token_key:'XXXX',
    access_token_secret:'XXXX'
}


let client = new TwitterPack(secret)

client.stream('statuses/filter', {track: '#game'},  function(stream) {
    stream.on('data', function(tweet) {
        console.log(tweet.text);
    });

    stream.on('error', function(error) {
        console.log(error);
    });
});