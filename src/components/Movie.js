import React, { Component } from 'react';
// import Modal from './Modal'
// import M from 'materialize-css'

class Movie extends Component {
    state = {
        showModal: false
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <div ref="Card" 
                id="card-cont" 
                className="card"
                onClick={this.toggleModal}>
                <li>
                    <div className="card-image">
                        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.img}`} />
                        <h4 id="title" className="card-title">{this.props.name}</h4>
                    </div>

                    <div className="card-content">
                        <p>{this.props.summary}</p>
                    </div>             
                </li>
            </div>
        )
    }
}

export default Movie;