import React, { Component } from 'react';
import { draw } from "../charts/helpers";

class Visualization extends Component {
    componentDidMount() {
    	draw(this.props);
    }

    componentDidUpdate() {
    	draw(this.props);
    }

    render() {
        return (
            <div className="visualization_component" />
        );
    }
}

export default Visualization;
