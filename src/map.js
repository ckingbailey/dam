import React, { Component } from 'react'
import './css/map.css'

export default class Map extends Component {
    render() {
        return (
            <section class="grid-x">
                <div className="medium-10 medium-offset-1 map-container">
                    <div className="map-container__map-placeholder"></div>
                </div>
            </section>
        )
    }
}