import React, { Component } from 'react';
import M from 'materialize-css'


class Modal extends Component {
    componentDidMount() {
        M.Modal.init(this.Modal)
    }

    render() {
        return (
            <modal id="modal1"
                ref={modal => {
                    this.Modal = modal
                }}>
                <div id="header">
                    <button>X</button>
                    <h1 id="title">{this.props.name}</h1>
                </div>

                <div id="overview">
                    <p id="content">{this.props.overview}</p>
                </div>

                <div id="footer">
                    <p>{this.props.original_title}</p>
                    <p>{this.props.original_language}</p>
                    <p>{this.props.release_date}</p>
                    <p>{this.props.adult}</p>
                </div>
            </modal>
        );
    }
}

export default Modal;