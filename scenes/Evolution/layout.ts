import { EvolutionNodeData } from "./evolutionData";

const LEVEL_SPACING = 220;
const LANE_SPACING = 320;

/**
 * Converts logical graph coordinates into pixel coordinates.
 *
 * level:
 * 0 -> bottom
 * 1 -> above
 * 2 -> above...
 *
 * lane:
 * -1 left
 * 0 center
 * 1 right
 */
export function getNodePosition(node: EvolutionNodeData) {
  return {
    x: node.lane * LANE_SPACING,
    y: -node.level * LEVEL_SPACING,
  };
}

/**
 * Returns the graph's total height.
 * Used to size the scene automatically.
 */
export function getGraphHeight(nodes: EvolutionNodeData[]) {
  const maxLevel = Math.max(...nodes.map((n) => n.level));

  return (maxLevel + 1) * LEVEL_SPACING;
}