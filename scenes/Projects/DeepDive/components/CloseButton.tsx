"use client";

interface Props {
  onClose: () => void;
}

export default function CloseButton({
  onClose,
}: Props) {
  return (
    <button
      onClick={onClose}
      className="
        rounded-full
        border
        border-white/10
        px-6
        py-3
        text-sm
        tracking-[.3em]
        uppercase
        text-white/70
        transition-all
        duration-300
        hover:border-white/30
        hover:text-white
      "
    >
      Close
    </button>
  );
}