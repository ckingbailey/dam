import React, { Component } from 'react'

class AboutModal extends Component {
    render() {
        const damReportLink = "https://water.ca.gov/-/media/DWR-Website/Web-Pages/Programs/All-Programs/Division-of-safety-of-dams/Files/Publications/Dams-Within-Jurisdiction-of-the-State-of-California-2018-Alphabetically-by-Dam-Name.pdf";
        return (
            <div className="about-modal">
                <button onClick={ this.props.handleCloseClick } className="about-modal__close-button">&times;</button>
                <p>This project was created for the <a href="http://waterchallenge.data.ca.gov/">California Water Data Challenge</a></p>
                <p>It was inspired by the recent publication of the report <a href={ damReportLink } className="about-modal__repot-link">Dams Within Jurisdiction of the State of California</a></p>
                <p>This is an open source project. You can find our development repo <a href="https://github.com/ckingbailey/dam">here</a></p>
                <p className="about-modal__contributors">Project contributors: <a>Dan Constable</a>, <a>Colin King-Bailey</a>, <a>Jessica Rahman</a>, <a>Daniel Siegel</a></p>
            </div>
        )
    }
}

export default AboutModal;