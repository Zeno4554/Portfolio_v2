"use client";

export interface Message {
  role: "system" | "user" | "assistant";
  text: string;
}

interface Props {
  messages: readonly Message[];
}

export default function ConversationPanel({
  messages,
}: Props) {
  return (
    <section
      className="
        flex
        h-full
        min-h-0
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#05080d]/90
        backdrop-blur-xl
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          px-6
          py-4
        "
      >
        <div>
          <p className="font-mono text-xs tracking-[.45em] text-cyan-400">
            CONVERSATION
          </p>

          <p className="mt-2 text-sm text-white/40">
            Live AI Session
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

          <span className="font-mono text-xs tracking-[.25em] text-emerald-300">
            ONLINE
          </span>
        </div>
      </div>

      {/* Messages */}

      <div
        className="
          flex-1
          space-y-4
          overflow-y-auto
          px-6
          py-5
          touch-auto
          overscroll-contain
        "
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className="
              rounded-xl
              border
              border-white/5
              bg-white/[0.02]
              p-4
            "
          >
            <p
              className={`
                font-mono
                text-xs
                tracking-[.25em]
                uppercase

                ${
                  message.role === "assistant"
                    ? "text-cyan-300"
                    : message.role === "user"
                    ? "text-orange-300"
                    : "text-emerald-300"
                }
              `}
            >
              {message.role}
            </p>

            <p
              className="
                mt-3
                text-sm
                leading-7
                text-white/75
              "
            >
              {message.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}