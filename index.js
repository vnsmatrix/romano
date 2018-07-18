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
    getArtworkById(req.params.id).then(result => {
        console.log('///getArtworkById result.rows', result.rows);
        res.json({
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
