import React from "react";

//D3
import * as d3 from "d3";
import { svg } from "d3";

//types
type propTypes = {
  scoreArray : Number[]
}


export default function ScoreGraph({scoreArray}:propTypes) {
  const graph = React.useRef(null);

  const data =  scoreArray.map((item , i)=>{
    return {x : i , y : item}
  })


  React.useEffect(() => {
    if(!data) return
    let svg = d3.select(graph.current);

    // Set the dimensions of the canvas / graph
    const margin = { top: 30, right: 20, bottom: 30, left: 50 },
      width = 300 - margin.left - margin.right,
      height = 150 - margin.top - margin.bottom;

    // Set the ranges
    const x = d3.scaleLinear().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    // Define the line
    const valueline = d3.line()
      .x(function (d) { return x(d.x); })
      .y(function (d) { return y(d.y); });

    // Adds the svg canvas
    svg = d3.select(graph.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    // Get the data

    // Scale the range of the data
    x.domain([0, 7]);
    y.domain([0, d3.max(data, function (d) { return d.y; })]);

    // Add the valueline path.
    svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline);

    // Add the X Axis
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add the Y Axis
    svg.append("g")
      .call(d3.axisLeft(y));

      svg.attr('fill', 'none')
      .attr('stroke', 'black');

  }, [scoreArray]);

  return <svg  ref={graph}></svg>

}
