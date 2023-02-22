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
}, 2000);



const express = require('express')
const multer  = require('multer')
var cors = require('cors')
const upload = multer({ dest: 'uploads/' })

const app = express()
app.use(cors())


app.get('/user/:id', function (req, res) {
    // const p = req.params;
    // console.log(p.id)
    const q = req.query;
    console.log(q.id)
    
    
    console.log(q.name)
    console.log(q.age)
  

    if(q.id == 'kimdj' && q.name == 'dj' && q.age == 28 ) {

        res.send("<a href='https://www.instagram.com/jo0ou_/'>kimdj instagram</a>")
    } else {
        res.send("faild")
    }
    
})

app.get('/npmUrl', function (req, res) {
    res.send("<a href='https://www.npmjs.com/package/express'>npm url</a>")
})

app.get('/sound/:name', function (req, res){

    const { name } = req.params
    console.log(name)
    if(name == 'dog') {
        console.log("멍멍")
        res.json({'sound':'멍멍'})
    } else if(name == 'cat') {
        console.log("야옹")
        res.json({'sound':'야옹'})
    } else{
        console.log("잡소리")
        res.json({'sound':'켈켈켈'})
    }
    

    
})



app.listen(3000)

