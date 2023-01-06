import React from "react";

//D3
import * as d3 from "d3";

// font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons";

//user Context
import { UserContext } from "../lib/contextAPI/userContext";

export default function ScoreGraph() {
  const graph = React.useRef(null);

  const score = [0, 5, 10, 8, 13, 18, 15, 20, 25, 30];

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

    // setting up scaling

    const xScale = d3
      .scaleLinear()
      .domain([0, score.length - 1])
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
      .ticks(score.length)
      .tickFormat((i) =>{
        console.log(i)
        return i+1
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
      .data([score])
      .join('path')
      .attr('d', (d) => generateScaledLine(d))
      .attr('fill', 'none')
      .attr('stroke', 'black');
  }, [score]);

  const { setGraphModal } = React.useContext(UserContext);
  return (
    <div className="w-full bg-white rounded relative max-w-xl p-5 flex flex-col gap-6 justify-center items-center">
      <FontAwesomeIcon
        onClick={() => setGraphModal(false)}
        className="absolute right-3 top-3 text-2xl"
        icon={faClose}
      />

      <h2 className="text-center text-2xl font-semibold underline">
        Score Graph
      </h2>

      {/* graph here */}

      <svg  ref={graph}></svg>

      <button className="w-full bg-green-500 py-2 rounded shadow text-xl text-white">
        Close
      </button>
    </div>
  );
}
