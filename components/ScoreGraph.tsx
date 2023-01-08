import React from "react";

//D3
import * as d3 from "d3";

//types
type propTypes = {
  scoreArray : number[]
}


export default function ScoreGraph({scoreArray}:propTypes) {
  const graph = React.useRef(null);

  React.useEffect(() => {
    //setting up svg
    const w = 300;
    const h = 100;
    const svg = d3
      .select(graph.current)
      .attr("width", w)
      .attr("height", h)
      .style("background", "#d3d3d3")
      .style("border-radius", "5px")
      .style('overflow' , 'visible')
      .style("margin-bottom" , 20)

    // setting up scaling

    const xScale = d3
      .scaleLinear()
      .domain([0, scoreArray.length - 1])
      .range([0, w]);
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    //set the axis
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(scoreArray.length)
      .tickFormat((i) =>{
        const num = (i as number)+1
        return num.toString()
      });
    const yAxis = d3.axisLeft(yScale)
      .ticks(5);
    svg.append('g')
    .call(xAxis)
    .attr('transform' , `translate(0, ${h})`);

    svg.append('g')
    .call(yAxis);

    // setting up data for svg
    svg
      .selectAll('.line')
      .data([scoreArray])
      .join('path')
      .attr('d', (d) => generateScaledLine(d))
      .attr('fill', 'none')
      .attr('stroke', 'black');
  }, [scoreArray]);

  return <svg  ref={graph}></svg>

}
