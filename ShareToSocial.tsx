import React from "react";
import { BsTwitter } from "react-icons/bs";

const ShareToSocial = () => {
  const [selection, setSelection] = React.useState<string | undefined>("");
  const [position, setPosition] = React.useState<Record<string, number>>();
  function onShare(text?: string) {
    if (!selection) return;
    const message = [
      `${encodeURIComponent((text || selection).substring(0, 120))}`,
      encodeURIComponent(window.location.href),
    ].join("%0A%0A");
    const url = `https://twitter.com/intent/tweet?text=${message}`;
    window.open(url, "share-twitter", "width=550, height=550");
  }

  React.useEffect(() => {
    document.addEventListener("selectionchange", () => {
      setSelection(document?.getSelection()?.toString());
    });
  }, []);

  function onSelectStart() {
    setSelection(undefined);
  }

  React.useEffect(() => {
    document.addEventListener("selectstart", onSelectStart);
    document.addEventListener("mouseup", onSelectEnd);
    return () => {
      document.removeEventListener("selectstart", onSelectStart);
      document.removeEventListener("mouseup", onSelectEnd);
    };
  }, []);

  function onSelectEnd() {
    const activeSelection = document.getSelection();
    const text = activeSelection?.toString();

    if (!activeSelection || !text) {
      setSelection(undefined);
      return;
    }

    setSelection(text);

    const rect = activeSelection.getRangeAt(0).getBoundingClientRect();

    setPosition({
      x: rect.left + rect.width / 2 - 80 / 2,
      y: rect.top + window.scrollY - 46,
      width: rect.width,
      height: rect.height,
    });
  }

  React.useEffect(() => {
    document.addEventListener("mouseup", onSelectEnd);
    return () => {
      document.removeEventListener("mouseup", onSelectEnd);
    };
  }, []);

  return (
    <>
      {selection && (
        <button
          className="absolute flex justify-center items-center gap-2 py-1 px-2 rounded bg-slate-900 text-slate-200 before:w-4 before:h-4 before:rotate-45 before:bg-slate-900 before:absolute before:-z-10 before:-bottom-1 before:left-0  before:right-0 before:mx-auto"
          role="dialog"
          aria-labelledby="share"
          aria-haspopup="dialog"
          onClick={() => onShare()}
          style={{
            transform: `translate3d(${position?.x}px, ${position?.y}px, 0)`,
          }}
        >
          <span id="share">Share</span>
          <BsTwitter />
        </button>
      )}
    </>
  );
};

export default ShareToSocial;
