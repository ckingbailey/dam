import React, { Component } from 'react'
import mapImage1 from './assets/story-image1.png'
import mapImage2 from './assets/story-image2.png'
import barChart from './assets/story-image4.png'

class Story extends Component {
    render() {
        return (
            <div className="grid-x story">
                <div className="cell medium-4 medium-offset-2 story__line story__line-1">
                    <p>There are 1,400 dams in the State of California. They provide much of the drinking water we require to live our lives.</p>
                    <div className="story__img-container"><img src={ mapImage1 } alt="map showing 1400 dams in California" className="story__img" /></div>
                </div>
                <div className="cell medium-4 medium-offset-6 story__line story__line-2">
                    <p>They are inspected annually by the DWR Division of Safety of Dams. The latest assesment found that 92% are in satisfactory condition. That leaves 98 dams that are not.</p>
                    <div className="story__img-container"><img src={ mapImage2 } alt="map showing 98 unsatisfactory dams in California" className="story__img" /></div>
                </div>
                <div className="cell medium-6 medium-offset-3 story__line story__line-3">
                    <p>Only 5 of these 98 dams are owned by the State. 44 are owned by a city or county, and 49 are privately owned.</p>
                    <div className="story__img-container"><img src={ barChart } alt="bar graph breaking down dam ownership by local, private, and state" className="story__img" /></div>
                </div>
                <p className="cell medium-10 medium-offset-1 story__line">Just because a dam has been assessed as unsafe does not mean the entity that owns it is required to do anything. Check the map below, and if one of these dams is near you, contact your Representative and local paper to ensure that there is a plan in place to bring it up to code!</p>
            </div>
        )
    }
}

export default Story;