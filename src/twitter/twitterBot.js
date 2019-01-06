const Twit = require('twit');
const config = require('./../config/config');
const Tweets = require('./dtos/tweets');

const bot = new Twit(config);

// CMD LINE ARGS READ
var cmdLinesArgs = process.argv;
if (cmdLinesArgs.length < 3)
  console.log('Pls use cmd line arg to run a twitter function');

/** main controller function */
switch (cmdLinesArgs[2]) {
  case 'post':
    post();
    break;
  case 'getMentions':
    getMentions();
    break;
  case undefined:
    break;
  default:
    console.log('[' + cmdLinesArgs[2] + '] is not implemented yet D:');
}

/** Twitter functions */
function post() {
  if (!cmdLinesArgs[3]) {
    console.log('Pls put post content as 4th arg')
    return;
  }

  bot.post('statuses/update', {
    status: cmdLinesArgs[3]
  }, (err, data, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`${data.text} tweeted!`);
    }
  })
}

function getMentions() {
  bot.get('statuses/mentions_timeline', {
    screen_name: 'KennenFatrabbit'
  }, (err, data, response) => {
    if (err) {
      console.log(err);
    } else {
      let tweets = new Tweets(data);

      console.log('Fetched ' + tweets.getNumber() + ' tweets')
      console.log(tweets.printAll());

    }
  })
}