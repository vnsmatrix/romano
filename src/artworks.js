import React from 'react';
import axios from 'axios';
import Artwork from './artwork';
import {Link} from 'react-router-dom';

export default class Artworks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get(`/get-artworks`).then(resp => {
            console.log("Artworks axios.get resp.data", resp.data);
            this.setState({
                success: resp.data.success,
                artworks: resp.data.artworks
            })
        }).catch(e => {
            console.log("component did not mount", e);
        })
    }

    render() {
        console.log('Artworks render this.state', this.state);
        if(!this.state.artworks) {
            return null;
        }
        return (
            <div className="artworks">
            {this.state.artworks.map(artwork => {
                return (

                    <div className="prev-container" key={artwork.id}>
                        <div className="prev">
                            <div className="prev-img">
                                <Link to={`/artwork/${artwork.id}`}
                                    artwork={artwork} id={artwork.id}>
                                    <img src={artwork.img} id="anchor"/>
                                </Link>
                            </div>
                            <div className="name">
                                {artwork.title}
                            </div>
                            <div className="medium">
                                    {artwork.medium}
                            </div>
                            <div className="dets">
                                {artwork.format}
                            </div>

                        </div>
                    </div>
                )
            })}

            </div>
        )
    }
}
