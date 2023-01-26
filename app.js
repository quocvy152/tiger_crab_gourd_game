const express = require('express')
const app = express()

const figlet = require('figlet');

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, () => {
    figlet(`TIGER CRAB GOURD GAME`, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
        console.log(`Server started at PORT ${PORT}`)
    });
})