"use client";

import { useEffect, useState } from "react";
import { typewriterPhrases } from "@/content/portfolio";

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = typewriterPhrases[index];
    const delay = deleting ? 40 : 70;
    const pause = phrase === text && !deleting ? 1200 : 0;

    const id = window.setTimeout(() => {
      if (pause) {
        setDeleting(true);
        return;
      }
      if (!deleting) {
        setText(phrase.slice(0, text.length + 1));
        return;
      }
      if (text.length === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % typewriterPhrases.length);
        return;
      }
      setText(text.slice(0, -1));
    }, pause || delay);

    return () => window.clearTimeout(id);
  }, [text, deleting, index]);

  return (
    <span className="text-accent">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent align-[-2px]">
        &nbsp;
      </span>
    </span>
  );
}
