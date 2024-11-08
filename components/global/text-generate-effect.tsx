"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={`dark:text-green-400 text-black font-mono opacity-100 ${
              filter ? "blur-sm" : ""
            }`}
            style={{
              filter: filter ? "blur(10px)" : "none",
              textShadow: "0 0 2px rgba(0, 255, 0, 0.8), 0 0 4px rgba(0, 255, 0, 0.6)",
              fontWeight: "bold",
              letterSpacing: "0.1em",
            }}
            
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={className}>
      <div className="mt-2">
        <div className="dark:text-gray text-black text-xl leading-snug ">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};