import React, { Component } from 'react';
import spinner from "../../assets/spinner.png";

export default class Logo extends Component {
    render() {
        return (
            <div>
                <img
                    className="spinner"
                    src={spinner}
                    alt="spinner"
                />
            </div>
        )
    }
}
