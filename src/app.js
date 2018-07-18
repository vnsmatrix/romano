import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import About from './about';
import Artworks from './artworks';
import Contact from './contact';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <BrowserRouter>
            <div id="app-container">
                <nav>
                    <audio id="cat">
                        <source src="meow.mp3"></source>
                    </audio>
                    <div className='home'>
                        <a href="index.html"><h1>NIL & KARIN ROMANO</h1></a>
                    </div>

                    <div id='links'>
                        <Link to="about">ABOUT</Link>
                        <Link to="/artworks">ARTWORKS</Link>
                        <Link to="/contact">CONTACT</Link>
                    </div>
                    <div id="nav-v">
                        <a href="https://www.instagram.com/_blackorchids_/" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://facebook.com/nil.romano" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://soundcloud.com/music-junkies-twins" target="_blank"><i class="fab fa-soundcloud"></i></a>
                    </div>
                </nav>

                <div className="content">
                    <div id="routes">
                        <Route exact
                            path="/"
                            render={() => (
                                <About/>
                            )}
                        />

                        <Route path="/about" component={About} />
                        <Route path="/artworks" component={Artworks} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>

            </div>
            </BrowserRouter>
        );
    }
}
