export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-void">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-ink-faint border-t-aurora-cyan" />
    </div>
  );
}
