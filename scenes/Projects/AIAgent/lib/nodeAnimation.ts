import type { StageId } from "../hooks/usePipeline";
import { getActiveEdgeIds } from "./pipelineAnimation";

export function getHighlightedEdges(stage: StageId | null) {
  return getActiveEdgeIds(stage);
}

export function getPacketCount(stage: StageId | null) {
  if (!stage) return 0;
  return 3;
}
