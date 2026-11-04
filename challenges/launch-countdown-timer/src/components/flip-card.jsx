import { useEffect, useRef, useState } from "react";
import TickTokAudio from "../assets/audios/clock.mp3";
import { useSound } from "../store/sound";

const FlipCard = ({ value, label }) => {
  const segementOverlayRef = useRef(null);
  const [segementValue, setSegementValue] = useState(value);
  const { isMuted } = useSound();
  const soundEffects = new Audio(TickTokAudio);

  useEffect(() => {
    // Avoid having the animation in the first render
    if (segementValue === value) return;

    const overlay = segementOverlayRef.current;

    !isMuted && soundEffects.play();
    overlay.classList.add("flip");

    const timeout = setTimeout(() => {
      !isMuted && soundEffects.pause();
      overlay.classList.remove("flip");
    }, 800);

    const changeValueDelay = setTimeout(() => {
      setSegementValue(value);
    }, 400);

    return () => {
      clearTimeout(timeout);
      clearTimeout(changeValueDelay);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="space-y-5">
      <div className="block time-segment w-[75px] md:w-[100px] lg:w-[200px] text-[40px] md:text-[50px] lg:text-[100px]">
        <div className="segement-display relative h-full">
          <div className="overflow-hidden text-center w-full h-1/2 relative bg-dark-blue-1 text-soft-red leading-[1.75] rounded-lg">
            <div className="h-1 w-0.5 md:h-2 md:w-1 lg:h-4 lg:w-2 bg-dark-blue-3 rounded-r-full absolute top-1/2 left-0 -translate-y-1/2"></div>
            <div className="h-1 w-0.5 md:h-2 md:w-1 lg:h-4 lg:w-2 bg-dark-blue-3 rounded-l-full absolute top-1/2  right-0 -translate-y-1/2"></div>
            {segementValue}
          </div>
          <div
            ref={segementOverlayRef}
            className="segement-overlay absolute top-0 h-full w-[75px] md:w-[100px] lg:w-[200px] perspective-[400px] rounded-lg"
          >
            <div className="segement-top rounded-t-lg absolute overflow-hidden text-center w-full h-1/2 top-0 leading-[1.75] bg-dark-blue-1 text-soft-red origin-bottom">
              {segementValue}
              <div className="h-2 w-2 bg-dark-blue-3 rounded-tr-full absolute bottom-0 left-0"></div>
              <div className="h-2 w-2 bg-dark-blue-3 rounded-tl-full absolute bottom-0 right-0"></div>
            </div>
            <div className="segement-bottom rounded-b-lg absolute overflow-hidden text-center w-full h-1/2 bottom-0 leading-[0] bg-dark-blue-1 text-soft-red border-t-3 border-dark-blue-3 origin-top">
              <div className="h-2 w-2 bg-dark-blue-3 rounded-br-full absolute top-0 left-0"></div>
              <div className="h-2 w-2 bg-dark-blue-3 rounded-bl-full absolute top-o right-0"></div>
              {segementValue}
            </div>
          </div>
        </div>
      </div>
      <div className="text-lg text-center">{label}</div>
    </div>
  );
};

export default FlipCard;
