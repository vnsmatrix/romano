import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function About (props) {
    console.log("About props", props);
    return (
        <div id="about">
            <p>Nil & Karin Romano are twin sisters born & based in Tel Aviv. They create beautifully twisted works of art four hands at a time. For the twins, the most important thing in the process of creation is to tell a story, which will give the viewer a glimpse into secret corners of their inner world they can not express in words. Long years of almost total isolation, depression and mental storms bring the sisters to create unusual art that deals with the dark layers of the human soul, using motifs of chaos, nihilism and strong emotions.</p>
        </div>
    )
}
