import React, { Component } from 'react'

export default class Definitions extends Component {
    damConditionDefs = {
        satisfactory: "No existing or potential safety deficiencies. Acceptable under all loading conditions",
        fair: "No existing safety deficiencies under normal conditions. Long-standing deficiency that is not being addressed in a timely manner, uncertified and under evaluation.",
        poor: "Significant deficiency or multiple deficiencies recognized for realistic loading conditions; remedial action required. Extensive remedial work required.",
        unsatisfactory: "Deficiency recognized that requires immediate or emergency remedial action",
        "not rated": "Dam has not been inspected, is not under State jurisdiction, or has not been rated for other reasons."
    }

    downstreamHazardDefs = {
        low: "No probable loss of human life and low economic and environmental losses.",
        significant: "No probable loss of human life but can cause economic loss, environmental damage, impacts to critical facilities, or other significant impacts.",
        high: "Expected to cause loss of at least one human life.",
        "extremely high": "Expected to cause considerable loss of human life or would result in an inundation area with a population of 1,000 or more."

    }

    renderDefsList(defs) {
        return (
            <dl>
            { Object.keys(defs).map(term => {
                const termHeading = term.charAt(0).toUpperCase() + term.slice(1)
                return (
                    <div className="definitions__table-row grid-x">
                        <dt className="medium-3">{ termHeading }</dt>
                        <dd className="medium-9">{ defs[term] }</dd>
                    </div>
                )
            }) }
            </dl>
        )
    }

    render() {
        return (
            <div className="grid-x">
                <div className="medium-10 medium-offset-1">
                    <div className="definitions__header grid-x align-bottom">
                        <h3 className="medium-6">About the data</h3>
                        <h5 className="definitions__download-button medium-6"><a href="https://opendata.arcgis.com/datasets/98a09bec89c84681ae1701a2eb62f599_0.csv">Download the data</a></h5>
                    </div>
                    <p>Dam condition is assessed according to criteria established by the National Inventory of Dams (NID) definitions. For some condition categories, <a href="https://water.ca.gov/Programs/All-Programs/Division-of-Safety-of-Dams">the California Division of Safety of Dams (DSOD)</a> has added additional criteria. These definitions are summarized below. For a full description of these condition assessment criteria, see the 2018 <a href={ this.props.damReportLink }>DSOD dam safety assessment report</a>.</p>
                    <div>
                        <h4>Dam Condition Assessment</h4>
                        <p className="definitions__explanation">California DSOD uses NID’s condition rating definitions, with additional criteria, as a guideline in assigning condition assessments.</p>
                        <div className="definitions__table">
                            <div className="definitions__table-row definitions__table-headings grid-x">
                                <h5 className="medium-3">Rating</h5>
                                <h5 className="medium-9">Definitions/Criteria</h5>
                            </div>
                            { this.renderDefsList(this.damConditionDefs) }
                        </div>
                    </div>
                    <div>
                        <h4>Downstream Hazard</h4>
                        <p className="definitions__explanation">Downstream hazard is based on potential downstream impacts to life and property if a dam failed when operating with a full reservoir. This hazard is not related to the condition of the dam. DSOC definitions for downstream hazards are based on Federal Guidelines for Inundation Mapping of Flood Risks Associated with Dam Incidents and Failures (FEMA P-946, July 2013). While FEMA includes three categories: Low, Significant, and High. DSOD adds a fourth category, “Extremely High.”</p>
                        <div className="definitions__table">
                            <div className="definitions__table-row definitions__table-headings grid-x">
                                <h5 className="medium-3">Potential Hazard</h5>
                                <h5 className="medium-9">Potential Downstream Impacts to Life and Property</h5>
                            </div>
                            { this.renderDefsList(this.downstreamHazardDefs) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
