const Tweet = require('./../objects/tweet');
const testData = require('./data/retweetArray');


function testGetTweetContent() {

    console.log(new Tweet(testData.testTweet1).getText());
}



var runAllTest;
(runAllTest = function(){
    testGetTweetContent();
})();