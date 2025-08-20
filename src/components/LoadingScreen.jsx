import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Loading ... ";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center px-4 overflow-x-hidden">
      <div className="mb-6 text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-center">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-full max-w-xs h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 animate-loading-bar" />
      </div>
    </div>
  );
};
