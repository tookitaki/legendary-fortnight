import * as d3 from 'd3';

export const nodeHeight = 60;
export const margin = {
  left: '24',
  right: '24',
  top: '24',
  bottom: '24'
};

export const countSignals = (type, node) => {
  switch (type) {
    case 'inputs':
      return node.inputs + (node.hasDecisionIn ? 1 : 0);
    case 'outputs':
      return node.outputs + (node.hasDecisionOut ? 1 : 0);
    default:
      return 0;
  }
};

export const nodeWidth = (d) => {
  if (!d) return d;
  const max = Math.max(countSignals('inputs', d), countSignals('outputs', d));
  return max > 4 ? max * 50 : 200;
};
