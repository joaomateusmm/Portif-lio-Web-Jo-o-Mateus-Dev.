import React, { useState, useEffect, useMemo } from "react";

export default function Typewriter() {
  const arrayText = useMemo(
    () => ["Profissional.", "Posicionamento.", "Visibilidade.", "Essencial."],
    []
  );

  const writeTime = 80;
  const removeTime = 1500;

  const [displayText, setDisplayText] = useState("");
  const [indexSentence, setIndexSentence] = useState(0);
  const [indexChar, setIndexChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (!isDeleting && indexChar <= arrayText[indexSentence].length) {
      timeoutId = setTimeout(() => {
        setDisplayText(arrayText[indexSentence].substring(0, indexChar));
        setIndexChar((prev) => prev + 1);
      }, writeTime);
    } else if (!isDeleting && indexChar > arrayText[indexSentence].length) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, removeTime);
    } else if (isDeleting && indexChar >= 0) {
      timeoutId = setTimeout(() => {
        setDisplayText(arrayText[indexSentence].substring(0, indexChar));
        setIndexChar((prev) => prev - 1);
      }, writeTime);
    } else if (isDeleting && indexChar < 0) {
      setIsDeleting(false);
      setIndexSentence((prev) => (prev + 1) % arrayText.length);
      setIndexChar(0);
    }

    return () => clearTimeout(timeoutId);
  }, [indexChar, isDeleting, indexSentence, arrayText]);

  return <span className="typewriter-text">{displayText}</span>;
}
