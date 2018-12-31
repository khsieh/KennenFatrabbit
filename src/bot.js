const Twit = require('twit')
const config = require('./config')

const bot = new Twit(config)

bot.post('statuses/update', {
  status: 'hello world test123!'
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`${data.text} tweeted!`)
  }
})