const Tweet = require('./../dtos/tweet');

class Tweets {
    constructor(tweets) {
        this.tweets = tweets.map(x => new Tweet(x));
    }

    getAll() {
        return this.tweets;
    }
    printAll() {
        console.log(this.tweets);
    }
    getNumber(){
        return this.tweets.length;
    }

}

module.exports = Tweets;