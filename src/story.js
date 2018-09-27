import React, { Component } from 'react'

class Story extends Component {
    render() {
        return (
            <div id="story" className="grid-x story">
                <div className="cell medium-10 medium-offset-1">
                    <ul>
                        <li>There are almost 1400 dams in the State of California</li>
                        <li>They are inspected annually by the DWR Division of Safety of Dams. Currently, 92% are in satisfactory condition. That leaves 98 dams that are not</li>
                        <li>Only 5 of these dams are actually owned by the State. 44 are owned by city or county, and 49 are privately owned.</li>
                        <li>Just because a dam has been assessed as unsafe does not mean money has been set aside to repair it.</li>
                        <li>If one of these dams is near you, contact your Representative and local paper to ensure that there is a plan in place to bring it up to code!</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Story;