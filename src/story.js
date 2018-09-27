import React, { Component } from 'react'
import mapImage1 from './assets/story-image1.png'
import mapImage2 from './assets/story-image2.png'
import barChart from './assets/story-image3.png'

class Story extends Component {
    render() {
        return (
            <div id="story" className="grid-x story">
                <div className="cell medium-10 medium-offset-1">
                    <ul>
                        <li>There are almost 1400 dams in the State of California</li>
                        <li><img src={ mapImage1 } alt="map showing 1400 dams in California" /></li>
                        <li>They are inspected annually by the DWR Division of Safety of Dams. Currently, 92% are in satisfactory condition. That leaves 98 dams that are not</li>
                        <li><img src={ mapImage2 } alt="map showing 98 unsatisfactory dams in California" /></li>
                        <li>Only 5 of these dams are actually owned by the State. 44 are owned by city or county, and 49 are privately owned.</li>
                        <li><img src={ barChart } alt="bar graph breaking down dam ownership by local, private, and state" /></li>
                        <li>Just because a dam has been assessed as unsafe does not mean money has been set aside to repair it.</li>
                        <li>If one of these dams is near you, contact your Representative and local paper to ensure that there is a plan in place to bring it up to code!</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Story;