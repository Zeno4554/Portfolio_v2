export function streamAssistantResponse(
  text: string,
  onChunk: (chunk: string) => void,
  onComplete: () => void
) {
  const words = text.split(" ");
  let index = 0;

  const handle = window.setInterval(() => {
    if (index >= words.length) {
      window.clearInterval(handle);
      onComplete();
      return;
    }

    onChunk(
      words[index] +
        (index === words.length - 1 ? "" : " ")
    );

    index += 1;
  }, 90);

  return () => {
    window.clearInterval(handle);
  };
}