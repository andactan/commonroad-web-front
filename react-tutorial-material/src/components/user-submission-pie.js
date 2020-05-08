import React, { useState, useEffect } from 'react';
import { VictoryPie, VictoryLabel } from 'victory';


export default function UserSubmissionsPie() {
  const wantedGraphicData = [{x: "A", y: 10 }, {x: "B", y: 50 }, {x: "C", y: 40 }]; // Data that we want to display
  const defaultGraphicData = [{x: "A", y: 0 }, {x: "B", y: 0 }, {x: "C", y: 100 }]; // Data used to make the animate prop work
  const [graphicData, setGraphicData] = useState(defaultGraphicData);

  useEffect(() => {
    setGraphicData(wantedGraphicData); // Setting the data that we want to display
  }, []);

  return (
    <div style={{maxWidth: "50%", margin: "0 auto"}}>
      <svg viewBox="0 0 200 200">
        <VictoryPie
          standalone={false}
          width={200}
          height={200}
          animate={{ easing: 'exp' }}
          data={graphicData}
          colorScale="warm"
          innerRadius={68}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{fontSize: 20}}
          text="Pie"
          x={100}
          y={100}
        >
        </VictoryLabel>
      </svg>
    </div>
  );
}