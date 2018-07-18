///SERVER///

const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const { getArtworks } = require('./db')

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

// app.get('/get-artwork/:id', (req, res) => {
//     console.log('///GET ARTWORK req.session.user', req.session.user);
//     if(req.session.user) {
//         Promise.all([
//             getArtworkById(req.params.id),
//             checkIfFav(req.session.user.id, req.params.id)
//         ]).then(result => {
//             console.log('///result[0].rows[0]', result[0].rows[0]);
//             console.log('///result[1].rows', result[1].rows);
//             console.log('fav: result[1].rows.length > 0', result[1].rows.length > 0);
//             res.json({
//                 artwork: result[0].rows[0],
//                 fav: result[1].rows.length > 0
//             })
//         }).catch(e => {
//             console.log(e);
//         })
//     } else {
//         getArtworkById(req.params.id).then(result => {
//             console.log('///getArtworkById result.rows', result.rows);
//
//             res.json({
//                 artwork: result.rows[0],
//                 fav: 666
//             })
//         }).catch(e => {
//             console.log(e);
//         })
//
//     }
// })

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
