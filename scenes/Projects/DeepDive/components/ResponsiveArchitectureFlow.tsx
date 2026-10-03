interface FlowNode {
  id: string;
  title: string;
  layer?: string;
  column?: string;
}

interface Props {
  nodes: readonly FlowNode[];
  activeId?: string | null;
  onSelect: (id: string) => void;
  tone: "cyan" | "emerald" | "sky" | "violet";
}

const TONES = {
  cyan: {
    active: "border-cyan-300/70 bg-cyan-400/10",
    index: "text-cyan-300/60",
    label: "text-cyan-300/60",
    arrow: "text-cyan-300/50",
  },
  emerald: {
    active: "border-emerald-300/70 bg-emerald-400/10",
    index: "text-emerald-300/60",
    label: "text-emerald-300/60",
    arrow: "text-emerald-300/50",
  },
  sky: {
    active: "border-sky-300/70 bg-sky-400/10",
    index: "text-sky-300/60",
    label: "text-sky-300/60",
    arrow: "text-sky-300/50",
  },
  violet: {
    active: "border-violet-300/70 bg-violet-400/10",
    index: "text-violet-300/60",
    label: "text-violet-300/60",
    arrow: "text-violet-300/50",
  },
} as const;

export default function ResponsiveArchitectureFlow({
  nodes,
  activeId,
  onSelect,
  tone,
}: Props) {
  const colors = TONES[tone];

  return (
    <div
      aria-label="Architecture flow"
      className="grid w-full min-w-0 gap-2 lg:hidden"
      role="list"
    >
      {nodes.map((node, index) => {
        const active = node.id === activeId;

        return (
          <div key={node.id} role="listitem">
            <button
              type="button"
              aria-pressed={active}
              onClick={() => onSelect(node.id)}
              className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                active
                  ? colors.active
                  : "border-white/10 bg-black/30"
              }`}
            >
              <span className={`font-mono text-[10px] ${colors.index}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">
                <span className={`block font-mono text-[9px] uppercase tracking-[.2em] ${colors.label}`}>
                  {node.layer ?? node.column ?? "Module"}
                </span>
                <span className="mt-1 block font-display text-sm font-semibold text-white">
                  {node.title}
                </span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[.12em] text-emerald-300">
                {active ? "Active" : "Ready"}
              </span>
            </button>
            {index < nodes.length - 1 && (
              <div
                aria-hidden="true"
                className={`py-1 text-center font-mono text-xs ${colors.arrow}`}
              >
                ↓
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
