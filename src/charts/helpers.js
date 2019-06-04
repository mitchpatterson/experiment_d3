import * as d3 from "d3";

import { bar } from "./bar";

const createSvg = () => {
	return d3.select(".visualization_component").append("svg").attr("class", "d3_svg");
};

const removeExistingNodes = () => {
	d3.select(".visualization_component > *").remove();
};

const testNodeLength = () => {
	console.log(d3.selectAll(".x text").nodes());
	return {
		x: d3.max(d3.selectAll(".x text").nodes().map(d => d.getComputedTextLength())),
		y: d3.max(d3.selectAll(".y text").nodes().map(d => d.getComputedTextLength()))
	};
};

const acquireDrawCalculationsAndThenRedraw = (executable, svg, props) => {
	executable(svg);

	const maxNodes = testNodeLength();
	const maxTickX = maxNodes.x;
	const maxTickY = maxNodes.y;

	console.log("maxNodes", maxNodes);

	d3.select(".d3_svg > *").remove();
	executable(svg, props, {bottom: maxTickX, left: maxTickY});
};

export const draw = (props, margin) => {
	removeExistingNodes();

	const svg = createSvg();
	switch(props.type) {
		case "bar":
			acquireDrawCalculationsAndThenRedraw(bar, svg, props);
			break;
		default:
			acquireDrawCalculationsAndThenRedraw(bar, svg, props);
			break;
	}
};