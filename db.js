var spicedPg = require('spiced-pg');

var db;

if (process.env.DATABASE_URL){
    db = spicedPg(process.env.DATABASE_URL);
} else {
    db = spicedPg('postgres:postgres:postgres@localhost:5432/romano');
}

exports.getArtworks = () => {
    return db.query(`SELECT * FROM artworks`);
}

exports.getArtworkById = (id) => {
    return db.query(`SELECT * FROM artworks WHERE id = $1`, [id]);
}

exports.getArtworksByMedium = (medium) => {
    return db.query(`SELECT * FROM artworks WHERE medium = $1`, [medium]);
}
