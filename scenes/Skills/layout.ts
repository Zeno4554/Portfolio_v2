import { SkillNodeData } from "./galaxyData";

/**
 * Virtual Galaxy Size
 *
 * This is NOT the browser size.
 * It is the coordinate system for positioning all skill planets.
 */
const SCENE_WIDTH = 1200;
const SCENE_HEIGHT = 1050;

/**
 * Planet diameter
 */
export const NODE_SIZE = 64;
export const NODE_RADIUS = NODE_SIZE / 2;

export function getSkillPosition(node: SkillNodeData) {
  return {
    x: (node.x / 100) * SCENE_WIDTH,
    y: (node.y / 100) * SCENE_HEIGHT,
  };
}

/**
 * Center of the glowing planet.
 */
export function getSkillCenter(node: SkillNodeData) {
  const pos = getSkillPosition(node);

  return {
    x: pos.x + NODE_RADIUS,
    y: pos.y + NODE_RADIUS,
  };
}

export function getGalaxySize() {
  return {
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT,
  };
}

export function getNodeById(
  nodes: SkillNodeData[],
  id: string
) {
  return nodes.find((node) => node.id === id);
}