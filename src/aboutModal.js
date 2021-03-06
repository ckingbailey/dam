import React, { Component } from 'react'
import teamPhoto from './assets/teamPhoto.jpg'

class AboutModal extends Component {
    contributorLinks = {
        colin: "https://github.com/ckingbailey",
        jessica: "https://github.com/jesrah",
        daniel: "https://github.com/dcgull",
        dan: "https://github.com/dsconstable"
    }

    render() {
        return (
            <div onClick={ () => null } className="about-modal">
                <button onClick={ this.props.handleCloseClick } className="about-modal__close-button">&times;</button>
                <p>This project was created for the <a href="http://waterchallenge.data.ca.gov/">California Water Data Challenge</a></p>
                <p>It was inspired by the recent publication of the report <a href={ this.props.damReportLink } className="about-modal__repot-link">Dams Within Jurisdiction of the State of California</a></p>
                <p>We began this project in mid-September, 2018 at the CA Water Data Hackathon at the <a href="https://bids.berkeley.edu/">Berkeley Institute for Data Science</a></p>
                <p>This is an open source project. You can find our development repo <a href="https://github.com/ckingbailey/dam">here</a></p>
                <p className="about-modal__contributors">Project contributors: <a href={ this.contributorLinks.dan } target="_blank">Dan Constable</a>, <a href={ this.contributorLinks.colin } target="_blank">Colin King-Bailey</a>, <a href={ this.contributorLinks.jessica } target="_blank">Jessica Rahman</a>, <a href={ this.contributorLinks.daniel } target="_blank">Daniel Siegel</a></p>
                <img src={ teamPhoto } alt="The team, the day we met at California Water Data Hackathon" aria-labelledby="team-pic-label" className="about-modal__team-pic" />
                <aside id="team-pic-label" className="about-modal__team-pic-label">The team, from left to right: Colin King-Bailey, Jessica Rahman, Daniel Siegel, and Dan Constable</aside>
            </div>
        )
    }
}

export default AboutModal;