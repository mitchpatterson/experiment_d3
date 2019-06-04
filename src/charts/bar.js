import * as d3 from "d3";

const rand = () => Math.ceil(Math.random() * 10000);

const data = [];
for (let i = 0; i < 12; i++) {
	const parseDate = d3.timeParse("%Y-%m");
	data.push({x: parseDate(`2019-${i < 10 ? "0" : ""}${i + 1}`), y: rand()});
}
console.log("data", data);

export const bar = (svg, props, preCalcMargin) => {
	const margin = {
		top: 20,
		bottom: preCalcMargin && preCalcMargin.bottom ? 20 + preCalcMargin.bottom : 20,
		left: preCalcMargin && preCalcMargin.left ? 20 + preCalcMargin.left : 20,
		right: 20 
	};
	const fullWidth = 600;
	const fullHeight = 400;
	const width = fullWidth - margin.left - margin.right;
	const height = fullHeight - margin.top - margin.bottom;

	console.log(d3.max(data, d => d.y));

	const x = d3.scaleBand().domain(data.map(d => d.x)).rangeRound([0, width]).padding([.05]);
	const y = d3.scaleLinear().domain([0, d3.max(data, d => d.y)]).range([height, 0]);

	const xAxis = d3.axisBottom(x).tickFormat(d3.timeFormat("%Y-%m"));;
	const yAxis = d3.axisLeft(y);

	svg.attr("width", fullWidth).attr("height", fullHeight);

	const chart = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);

	chart.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
			.style("text-anchor", "end")
			.attr("dx", "-.8em")
			.attr("dy", "-.55em")
			.attr("transform", "rotate(-90)" );

	chart.append("g")
		.attr("class", "y axis")
		.call(yAxis);

    chart.selectAll("bar")
		.data(data)
		.enter().append("rect")
			.style("fill", "steelblue")
			.attr("x", (d) => { return x(d.x); })
			.attr("width", x.bandwidth())
			.attr("y", height)
			.attr("height", 0)
			.transition()
			.duration(500)
			.ease(d3.easeLinear)
			.attr("height", (d) => { return height - y(d.y); })
			.attr("y", (d) => { return y(d.y); });
};