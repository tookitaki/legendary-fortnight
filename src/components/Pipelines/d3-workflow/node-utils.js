import { nodeHeight, nodeWidth } from './utils';

const nodeUtils = (nodeEnter, selected) => {
  nodeEnter
    .append('rect')
    .attr('width', (d) => nodeWidth(d))
    .attr('height', nodeHeight)
    .attr('rx', 4)
    .attr('ry', 4)
    .style('fill', (d) =>
      selected && selected._id === d._id ? '#ffffff' : '#fbfbfb'
    )
    .style('stroke', (d) => {
      switch (d.nodeType) {
        case 'MODEL':
          return '#DC8090';
        case 'SCENARIO':
          return '#B5D99C';
        case 'TRANSFORMATION':
          return '#4e57c1';
        case 'CONNECTOR':
          return '#F5F7DC';
        default:
          return '#BBC1D1';
      }
    })
    .style('stroke-opacity', (d) =>
      selected && selected._id === d._id ? '0.5' : '8'
    )
    .style('stroke-width', (d) =>
      selected && selected._id === d._id ? '4px' : '2px'
    );

  let typeTextNode = nodeEnter
    .append('text')
    .style('fill-opacity', 1)
    .style('fill', '#6B8798')
    .attr('x', (d) => nodeWidth(d) / 2)
    .attr('y', 0)
    .attr('dy', (d) => (d.label ? '4em' : '3em'))
    .style('font', '12px sans-serif')
    .attr('text-anchor', 'middle')
    .text((d) => (d.nodeType === 'TRANSFORMATION' ? d.nodeName : d.nodeType));

  let nameTextNode = nodeEnter
    .append('text')
    .attr('class', 'boxtext-label')
    .style('fill-opacity', 1)
    .style('fill', (d) => {
      switch (d.nodeType) {
        case 'MODEL':
          return '#DC8090';
        case 'SCENARIO':
          return '#B5D99C';
        case 'TRANSFORMATION':
          return '#4e57c1';
        case 'CONNECTOR':
          return '#F5F7DC';
        default:
          return '#BBC1D1';
      }
    })
    .attr('x', (d) => nodeWidth(d) / 2)
    .attr('y', 0)
    .attr('dy', '1.5em')
    .attr('text-anchor', 'middle')
    .text((d) =>
      d.nodeName && d.nodeType != 'TRANSFORMATION' ? d.nodeName : ''
    );

  // Execution status
  nodeEnter
    .append('g')
    .attr(
      'transform',
      (d) =>
        'translate(' + (nodeWidth(d) - 30) + ',' + (nodeHeight / 2 + 5) + ')'
    )
    .append('svg:text')
    .attr(
      'class',
      (d) =>
        'icon' +
        (d.execution && d.execution.status == 'COMPLETED'
          ? ' green'
          : d.execution && d.execution.status == 'FAILED'
          ? ' red'
          : '')
    )
    .attr('text-anchor', 'middle')
    .text((d) => {
      if (d.execution) {
        //unicodes are for font-awesome-icons
        if (d.execution.isSkip) {
          return '\uf04e';
        } else {
          switch (d.execution.status) {
            case 'COMPLETED':
              return '\uf00c';
            case 'FAILED':
              return '\uf00d';
            case 'RUNNING':
              return '\uf110';
            case 'LAUNCHED':
              return '\uf01b';
            default:
              return '\uf141';
          }
        }
      }
      return '';
    })
    .append('svg:title')
    .text((d) => {
      if (d.execution) {
        if (d.execution.isSkip) {
          return 'Skipped';
        } else {
          switch (d.execution.status) {
            case 'COMPLETED':
              return 'Completed';
            case 'FAILED':
              return 'Failed';
            case 'RUNNING':
              return 'Running';
            case 'LAUNCHED':
              return 'Launched';
            default:
              return 'Pending';
          }
        }
      }
      return '';
    });
  return nodeEnter;
};

export default nodeUtils;
