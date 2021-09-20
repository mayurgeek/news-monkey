import React, { Component } from 'react'
import loading from "./ajax-loader (1).gif"

export default class Spiner extends Component {
    render() {
        return (
            <div className="text-center my-2">
                <h5>Loding. ..</h5><img src={loading} alt="Loding" />
            </div>
        )
    }
}
