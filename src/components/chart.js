import React, { Component } from 'react';
import "../styles/chart.css";

class Chart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chart_component">
            	<section className="chart_wrapper"></section>
            </div>
        );
    }
}

export default Chart;
