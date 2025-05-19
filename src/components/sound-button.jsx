import { useSound } from "../store/sound";

import Volume2 from "./icons/Volume2";
import VolumeOff from "./icons/volume-off";

const SoundButton = () => {
  const { isMuted, setIsMuted } = useSound();
  return (
    <button
      onClick={() => setIsMuted((prev) => !prev)}
      className="bg-dark-blue-1 text-soft-red p-2 rounded-md cursor-pointer hover:bg-greyish-blue transition-all duration-300"
    >
      {isMuted ? <VolumeOff /> : <Volume2 />}
    </button>
  );
};

export default SoundButton;
