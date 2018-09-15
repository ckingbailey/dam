import React, { Component } from 'react'
import './css/map.css'

export default class Map extends Component {
    render() {
        return (
            <section class="grid-x">
                <div className="medium-10 medium-offset-1 map-container">
                    <iframe
                        src="https://arcgis-content.maps.arcgis.com/apps/opsdashboard/index.html#/78bf1715d46c431ca75930ea88ebb653"
                        id="damMap"
                        name="Embedded Dam Map"
                        width="100%"
                        height="900"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                    ></iframe>
                </div>
            </section>
        )
    }
}