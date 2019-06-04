import React, { Component } from 'react';
import PropTypes from "prop-types";

import Visualization from "./visualization";
import "../styles/chart.css";

class Chart extends Component {
	static propTypes = {
		type: PropTypes.oneOf([
			"bar"
		])
	};

	static defaultProps = {
		type: "bar"
	};

    render() {
    	const { type } = this.props;
        return (
            <div className="chart_component">
            	<section className="chart_wrapper">
            		<h1>{type.charAt(0).toUpperCase() + type.slice(1)} Chart</h1>
            		<Visualization />
            	</section>
            </div>
        );
    }
}

export default Chart;
