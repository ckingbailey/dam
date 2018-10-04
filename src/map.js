import React, { Component } from 'react'

export default class Map extends Component {
    render() {
        return (
            <section className="grid-x">
                <div className="medium-10 medium-offset-1 map-section">
                    <p className="map-section__dropdown-instruction">Select ArcGIS World Geocoding Service from the search dropdown to avoid being prompted to login</p>
                    <div className="map-section__map-container">
                        <iframe
                            src="https://arcgis-content.maps.arcgis.com/apps/opsdashboard/index.html#/78bf1715d46c431ca75930ea88ebb653"
                            id="damMap"
                            title="Embedded Dam Map"
                            width="100%"
                            height="900"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                        ></iframe>
                    </div>
                </div>
            </section>
        )
    }
}