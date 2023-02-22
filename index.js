setTimeout(() => {
    var figlet = require('figlet');

figlet('node.js practice!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
}, 5000);



const express = require('express')
const app = express()


app.get('/', function (req, res) {
  res.send('Nodejs prac')
})

app.get('/dog', function (req, res) {
    res.send('dog')
})

app.get('/cat', function (req, res){
    res.send('cat')
})

app.listen(3000)
