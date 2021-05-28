import * as d3 from 'd3';
import { findIndex, throttle, range, extend } from 'lodash';

import { nodeHeight, margin, countSignals, nodeWidth } from './utils';

import nodeUtils from './node-utils';

export const emptyCanvas = (ref) => {
  const canvas = d3.select(ref);
  canvas.selectAll('*').remove();
};

export const draw = (fnProps) => {
  const {
    ref,
    layout,
    scale,
    selected,
    editable,
    linkAddFn,
    selectNode,
    onUpdate
  } = fnProps;
  emptyCanvas(ref.current);
  const svgElement = d3.select(ref.current);
  let svg = svgElement
    .append('g')
    .attr('class', 'bordered')
    .attr(
      'transform',
      'scale(' +
        scale / 100 +
        ')translate(' +
        margin.left +
        ',' +
        margin.top +
        ')'
    );

  // let diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x)
  let dragDiff = { x: 0, y: 0 },
    drawnLink = {};
  const dragmove = (event, d) => {
    const index = findIndex(layout.desc, { _id: d._id });
    //throttle / debounce
    if (event.dx < 100 && event.dy < 70) {
      dragDiff = {
        x: dragDiff.x + event.dx,
        y: dragDiff.y + event.dy
      };
    }
    throttle(() => {
      const x = layout.desc[index].x + dragDiff.x * (100 / scale);
      const y = layout.desc[index].y + dragDiff.y * (100 / scale);
      layout.desc[index].x = x < 0 ? 0 : x;
      layout.desc[index].y = y < 0 ? 0 : y;
      dragDiff = { x: 0, y: 0 };
      draw({ ...fnProps, layout }); //redraw canvas/svg
      // onUpdate(layout);//send the updated data to react component
    }, 40)();
  };
  let drag = d3
    .drag()
    .subject((d) => {
      return {
        x: d.dx,
        y: d.dy
      };
    })
    .on('drag', dragmove);

  let nodes = svg.selectAll('g.node').data(layout.desc);
  let nodeEnter = nodes
    .enter()
    .append('g')
    .attr('class', 'node')
    .attr('id', (d) => d._id)
    .attr('transform', (d) => 'translate(' + d.x + ',' + d.y + ')')
    .attr('cursor', 'pointer')
    .on('click', (d) => {
      const index = findIndex(layout.desc, { _id: d._id });
      selectNode && selectNode(layout.desc[index]);
    })
    .call(drag);

  nodeUtils(nodeEnter, selected);

  //input nodes
  nodeEnter.each(function (node) {
    console.log('test', node);
    const radius = 5;
    const totalInputs = countSignals('inputs', node);
    const totalOutputs = countSignals('outputs', node);
    // input nodes
    const inputEnter = d3
      .select(this)
      .selectAll('g.inputs')
      .data(range(0, totalInputs)) //decision component in
      .enter()
      .append('g')
      .attr('class', 'inputs')
      .attr(
        'transform',
        (d) => 'translate(' + nodeWidth(node) / 2 + ',' + 0 + ')'
      );
    inputEnter
      .append('circle')
      .attr('r', radius)
      .attr('cx', (d) => {
        if (totalInputs % 2 === 1) {
          const mid = Math.floor(totalInputs / 2);
          if (d < mid) {
            return -((mid - d) * 10 * radius);
          } else {
            return +((d - mid) * 10 * radius);
          }
        } else {
          const mid = totalInputs / 2;
          if (d < mid) {
            return -((mid - d - 0.5) * 10 * radius);
          } else {
            return +((d - mid + 0.5) * 10 * radius);
          }
        }
      })
      .style('stroke', function (d) {
        const node = d3.select(this.parentNode.parentNode).datum();
        if (node.jobType === 'SCENARIO' && d === 1) {
          return '#DC8090';
        } else if (node.jobType === 'DECISION_COMPONENT') {
          return '#1eafc6';
        } else {
          return '#c1c1c1';
        }
      })
      .style('fill', function (d) {
        const node = d3.select(this.parentNode.parentNode).datum();
        if (node.jobType === 'SCENARIO' && d === 1) {
          return '#DC8090';
        } else if (node.jobType === 'DECISION_COMPONENT') {
          return '#1eafc6';
        } else if (
          ['DECISION_COMPONENT', 'CONNECTORS'].indexOf(node.jobType) === -1 &&
          d >= node.inputs
        ) {
          return '#1eafc6';
        } else {
          return '#fff';
        }
      })
      .style('cursor', () => (drawnLink.source ? 'crosshair' : 'pointer'))
      .on('mouseover', function (d) {
        if (editable) d3.select(this).attr('r', radius * 3);
      })
      .on('mouseout', function (d) {
        d3.select(this).attr('r', radius);
      })
      .on('click', (e) => {
        if (editable) {
          const target = d3.select(this.parentNode.parentNode).datum();
          const targetIndex = d3.select(this.parentNode).datum();
          const existingIdx = findIndex(
            layout.links,
            (obj) =>
              obj.target._id === target._id && targetIndex === obj.targetIndex
          );
          if (existingIdx === -1) {
            if (drawnLink.source) {
              layout.links.push(
                extend(drawnLink, {
                  target: target,
                  targetIndex: targetIndex
                })
              );
              drawnLink = {};
              linkAddFn && linkAddFn();
              draw({ ...fnProps, layout });
            }
          }
        }
      });

    console.log('test', inputEnter);
    // output nodes
    const outputEnter = d3
      .select(this)
      .selectAll('g.outputs')
      .data(range(0, totalOutputs)) //decision component out
      .enter()
      .append('g')
      .attr('class', 'outputs')
      .attr(
        'transform',
        (d) => 'translate(' + nodeWidth(node) / 2 + ',' + nodeHeight + ')'
      );

    outputEnter
      .append('circle')
      .attr('r', radius)
      .attr('cx', (d) => {
        if (totalOutputs % 2 == 1) {
          const mid = Math.floor(totalOutputs / 2);
          if (d < mid) {
            return -((mid - d) * 10 * radius);
          } else {
            return +((d - mid) * 10 * radius);
          }
        } else {
          const mid = totalOutputs / 2;
          if (d < mid) {
            return -((mid - d - 0.5) * 10 * radius);
          } else {
            return +((d - mid + 0.5) * 10 * radius);
          }
        }
      })
      .style('stroke', function (d) {
        const node = d3.select(this.parentNode.parentNode).datum();
        if (node.jobType == 'MODEL') {
          return '#DC8090';
        } else {
          return '#c1c1c1';
        }
      })
      .style('fill', function (d) {
        const node = d3.select(this.parentNode.parentNode).datum();
        if (node.jobType == 'MODEL') {
          return '#DC8090';
        } else if (d == 0 && node.jobType == 'CONNECTORS') {
          return '#80c78f';
        } else if (d == 1 && node.jobType == 'CONNECTORS') {
          return '#999AAA';
        } else if (node.jobType == 'DECISION_COMPONENT') {
          return '#1eafc6';
        } else if (node.jobType == 'TRANSFORMATION' && d >= node.outputs) {
          return '#1eafc6';
        } else {
          return '#fff';
        }
      })
      .style('cursor', 'crosshair')
      .on('mouseover', function (d) {
        if (editable) d3.select(this).attr('r', radius * 3);
      })
      .on('mouseout', function (d) {
        d3.select(this).attr('r', radius);
      })
      .on('click', function (e) {
        drawnLink = {
          source: d3.select(this.parentNode.parentNode).datum(),
          sourceIndex: d3.select(this.parentNode).datum()
        };
      });

    outputEnter
      .append('text')
      .attr('dx', (d) => {
        if (node.outputs % 2 == 1) {
          const mid = Math.floor(node.outputs / 2);
          if (d < mid) {
            return -((mid - d) * 10 * radius) - 35;
          } else {
            return +((d - mid) * 10 * radius) + 10;
          }
        } else {
          const mid = node.outputs / 2;
          if (d < mid) {
            return -((mid - d - 0.5) * 10 * radius) - 35;
          } else {
            return +((d - mid + 0.5) * 10 * radius) + 10;
          }
        }
      })
      .attr('dy', -5)
      .text((d) => {
        if (node.nodeType == 'CONNECTORS' && node.outputs == 2 && d == 0) {
          return 'latest';
        } else if (
          node.nodeType == 'CONNECTORS' &&
          node.outputs == 2 &&
          d == 1
        ) {
          return 'previous';
        } else {
          d3.select(this).remove();
        }
      })
      .style('fill', '#8a8a8a');
    console.log('test', outputEnter);
  });
};
