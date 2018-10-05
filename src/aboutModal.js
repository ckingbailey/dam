import React, { Component } from 'react'

class AboutModal extends Component {
    render() {
        const damReportLink = "https://water.ca.gov/-/media/DWR-Website/Web-Pages/Programs/All-Programs/Division-of-safety-of-dams/Files/Publications/Dams-Within-Jurisdiction-of-the-State-of-California-2018-Alphabetically-by-Dam-Name.pdf";
        const contributorLinks = {
            colin: "https://github.com/ckingbailey",
            jessica: "https://github.com/jesrah",
            daniel: "https://github.com/dcgull"
        }
        return (
            <div onClick={ () => null } className="about-modal">
                <button onClick={ this.props.handleCloseClick } className="about-modal__close-button">&times;</button>
                <p>This project was created for the <a href="http://waterchallenge.data.ca.gov/">California Water Data Challenge</a></p>
                <p>It was inspired by the recent publication of the report <a href={ damReportLink } className="about-modal__repot-link">Dams Within Jurisdiction of the State of California</a></p>
                <p>This is an open source project. You can find our development repo <a href="https://github.com/ckingbailey/dam">here</a></p>
                <p className="about-modal__contributors">Project contributors: <a>Dan Constable</a>, <a href={ contributorLinks.colin } target="_blank">Colin King-Bailey</a>, <a href={ contributorLinks.jessica } target="_blank">Jessica Rahman</a>, <a href={ contributorLinks.daniel } target="_blank">Daniel Siegel</a></p>
            </div>
        )
    }
}

export default AboutModal;