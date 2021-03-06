import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Artwork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get(`/get-artwork/${this.props.match.params.id -1}`).then(resp => {
            console.log("Artwork axios.get resp.data", resp.data);
            this.setState({
                artwork: resp.data.artwork
            })
        }).catch(e => {
            console.log("Artwork component did not mount", e);
        })
    }

    componentDidUpdate() {

    }

    render() {
        console.log('Artwork render this.state', this.state);
        if(!this.state.artwork) {
            return null;
        }
        return (
            <div className="artwork">

                <div className="modal-container">
                    <div className="arrow prev">
                        <Link to={`/artwork/${this.state.artwork.id -1}`}>
                            <div className="prev-one"></div>
                            <div className="prev-two"></div>
                        </Link>
                    </div>
                    <div className="modal-img">
                        <a href="/artworks#anchor" >
                            <img src={this.state.artwork.img} />
                        </a>
                    </div>
                    <div className="arrow next">
                        <Link to={`/artwork/${this.state.artwork.id +1}`}>
                            <div className="prev-one"></div>
                            <div className="prev-two"></div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
