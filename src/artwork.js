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
        let hash = this.props.location.hash.replace('artwork/#', 'artworks');
        if (hash) {
            let node = ReactDOM.findDOMNode(this.refs[hash]);
            if (node) {
                node.scrollIntoView();
            }
        }
    }

    render() {
        console.log('Artwork render this.state', this.state);
        if(!this.state.artwork) {
            return null;
        }
        return (
            <div className="artwork">

                <div className="modal-container">
                    <div className="modal-img">
                        <Link to="/artworks#scroll_here">
                            <img src={this.state.artwork.img} />
                        </Link>

                    </div>
                </div>

            </div>
        )
    }
}
