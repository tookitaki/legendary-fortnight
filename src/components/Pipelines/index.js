import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components/macro';

import { pipeData } from './layout_data';
import { draw } from './d3-workflow';

const Svg = styled.svg`
  border: 1px solid red;
  margin: 24px;
`;

const Pipelines = () => {
  const [layout, setLayout] = useState(pipeData.layout);
  const [scale, setScale] = useState(100);
  const ref = useRef();

  const onUpdate = () => {};

  useEffect(() => {
    draw({ ref, layout, scale, onUpdate });
  }, [layout, scale]);

  console.log('test', scale, layout);

  return (
    <div>
      <h4>Pipelines</h4>
      <div>
        <input
          type="number"
          value={scale}
          min={0}
          max={300}
          onChange={(e) => setScale(e.target.value)}
        />
      </div>
      <Svg ref={ref} width={2000} height={1000} />
    </div>
  );
};

export default Pipelines;
