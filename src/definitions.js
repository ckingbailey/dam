import React, { Component } from 'react'

export default class Definitions extends Component {
    defsList = {
        satisfactory: "No existing or potential safety deficiencies. Acceptable under all loading conditions",
        fair: "No existing safety deficiencies under normal conditions. Long-standing deficiency that is not being addressed in a timely manner, uncertified and under evaluation.",
        poor: "Significant deficiency or multiple deficiencies recognized for realistic loading conditions; remedial action required. Extensive remedial work required.",
        unsatisfactory: "Deficiency recognized that requires immediate or emergency remedial action",
        "not rated": "Dam has not been inspected, is not under State jurisdiction, or has not been rated for other reasons."
    }

    renderDefsList() {
        return (
            <dl>
            { Object.keys(this.defsList).map(term => {
                return (
                    <div>
                        <dt>{ term }</dt>
                        <dd>{ this.defsList[term] }</dd>
                    </div>
                )
            }) }
            </dl>
        )
    }

    render() {
        return (
            <div class="grid-x">
                <div class="medium-10 medium-offset-1">
                    <h3>Data definitions</h3>
                    { this.renderDefsList() }
                </div>
            </div>
        )
    }
}
