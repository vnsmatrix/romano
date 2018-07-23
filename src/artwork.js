import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Artwork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get(`/get-artwork/${this.props.match.params.id}`).then(resp => {
            console.log("Artwork axios.get resp.data", resp.data);
            this.setState({
                artwork: resp.data.artwork
            })
        }).catch(e => {
            console.log("Artwork component did not mount", e);
        })
    }

    componentDidUpdate() {
        axios.get(`/get-artwork/${this.props.match.params.id}`).then(resp => {
            console.log("Artwork axios.get resp.data", resp.data);
            this.setState({
                artwork: resp.data.artwork
            })
        }).catch(e => {
            console.log("Artwork component did not mount", e);
        })
    }

    render() {
        console.log('Artwork render this.state', this.state);
        if(!this.state.artwork) {
            return <div>take care of -0 27- </div>;
        }
        return (
            <div className="artwork">

                <div className="modal-container">
                    <div className="arrow prev">
                        <Link to={`/artwork/${this.state.artwork.id -1}`} >
                            <div className="prev">
                                <img src="/next.png" />
                            </div>
                        </Link>
                    </div>
                    <div className="modal-img">
                        <a href="/artworks#anchor" >
                            <img src={this.state.artwork.img} />
                        </a>
                    </div>
                    <div className="arrow next">
                        <Link to={`/artwork/${this.state.artwork.id +1}`}>
                            <img src="/next.png" />

                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
