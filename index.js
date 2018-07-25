///SERVER///

const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const { getArtworks, getArtworkById } = require('./db')

//MIDDLEWARE:

app.use(express.static('./public'))

app.use(bodyParser());

app.use(compression());

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

//MY ROUTES:

app.get('/get-artworks', function(req,res) {
    getArtworks().then (result => {
        console.log("//////getArtworks result.rows", result.rows);
        res.json({
            success: true,
            artworks: result.rows
        })
    }).catch(e => {
        console.log(e);
        res.json({
            success: false
        })
    })
})

app.get('/get-artwork/:id', (req, res) => {
    console.log('///GET ARTWORK');
    //CHANGE hardcoded
    let curId;
    if (req.params.id < 1) {
        curId = 27;
    } else if (req.params.id > 27) {
        curId = 1;
    } else {
        curId = req.params.id;
    }
    console.log(curId);
    getArtworkById(curId).then(result => {
        console.log('///getArtworkById result.rows', result.rows);
        res.json({
            success: true,
            artwork: result.rows[0]
        })
    }).catch(e => {
        console.log(e);
    })
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

//FINAL ROUTE *!
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

//LISTENING:
app.listen(process.env.PORT || 8080, function() {
    console.log("I'm listening.");
});
