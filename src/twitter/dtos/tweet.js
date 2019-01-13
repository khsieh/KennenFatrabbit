class Tweet {
    constructor(tweet) {
        this.tweet = tweet;
    }

    getUserScreenName() {
        return this.tweet.user.screen_name;
    }

    getText() {
        return this.tweet.text;
    }


}

module.exports = Tweet;