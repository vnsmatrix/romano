DROP TABLE IF EXISTS artworks;

CREATE TABLE artworks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(333),
    img VARCHAR(333) NOT NULL,
    medium VARCHAR(333) NOT NULL,
    format VARCHAR(333) NOT NULL
);

INSERT INTO artworks (id, title, img, medium, format) VALUES
    (1, 'The Ballad Of Ladybird',
    'http://oi66.tinypic.com/2aj52x3.jpg',
    'Acrylic on canvas',
    '90 x 120 cm'
);

INSERT INTO artworks (id, title, img, medium, format) VALUES
    (2, 'Black Spell Of Destruction',
    'http://i63.tinypic.com/96hz74.jpg',
    'Acrylic on canvas',
    '100 x 120 cm'
);

INSERT INTO artworks (id, title, img, medium, format) VALUES
    (3, 'Lady Of Sorrow',
    'http://i65.tinypic.com/2ugdlif.jpg',
    'Acrylic on canvas',
    '100 x 120 cm'
);

INSERT INTO artworks (id, title, img, medium, format) VALUES
    (4, 'My Pets Have Eaten Me To Rot Away',
    'http://i65.tinypic.com/219w368.jpg',
    'Acrylic on canvas',
    '90 x 120 cm'
);

INSERT INTO artworks (id, title, img, medium, format) VALUES
    (5, 'LadyBug',
    'http://i63.tinypic.com/90u7iv.jpg',
    'Acrylic on canvas',
    '80 x 120 cm'
);

INSERT INTO artworks (id, title, img, medium, format) VALUES
    (6, 'Cheers To All My Tortured Boys',
    'http://i63.tinypic.com/90u7iv.jpg',
    'Acrylic on canvas',
    '100 x 120 cm'
);

INSERT INTO artworks (id, title, img, medium, format) VALUES
    (7, 'A Gothic Love Song',
    'http://i65.tinypic.com/256u2xl.jpg',
    'Acrylic on paper',
    '50 x 70 cm'
);

INSERT INTO artworks (id, title, img, medium, format) VALUES
    (8, 'The Bat Whisperer',
    'http://i64.tinypic.com/jslndl.jpg',
    'Acrylic on paper',
    '50 x 70 cm'
);

INSERT INTO artworks (id, title, img, medium, format) VALUES
    (9, 'The Mirror Of The Soul',
    'http://i66.tinypic.com/122g3sg.jpg',
    'Acrylic on paper',
    '50 x 70 cm'
);

INSERT INTO artworks (id, title, img, medium, format) VALUES
    (10, 'The Dilemma',
    'http://i66.tinypic.com/11scnc6.jpg',
    'Acrylic on paper',
    '50 x 70 cm'
);

INSERT INTO artworks (id, title, img, medium, format) VALUES
    (11, 'Too Young To Have A Baby',
    'http://i64.tinypic.com/huiw78.jpg',
    'Acrylic on paper',
    '50 x 70 cm'
);

INSERT INTO artworks (id, title, img, medium, format) VALUES
    (12, 'I Have A Special Plan For This World',
    'http://i63.tinypic.com/f4oa4x.jpg',
    'Acrylic on paper',
    '50 x 70 cm'
);

INSERT INTO artworks (id, title, img, medium, format) VALUES
    (13, 'Wash The Pain Away',
    'http://i64.tinypic.com/301213b.jpg',
    'Acrylic on canvas',
    '70 x 90 cm'
);

INSERT INTO artworks (id, title, img, medium, format) VALUES
    (14, 'The Circus Of Hell',
    'http://i64.tinypic.com/15r1g1v.jpg',
    'Acrylic on paper',
    '50 x 70 cm'
);
