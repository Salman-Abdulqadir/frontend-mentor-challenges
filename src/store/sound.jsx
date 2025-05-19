import { createContext, useContext, useState } from "react";

const SoundContext = createContext();

const SoundProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <SoundContext.Provider value={{ isMuted, setIsMuted }}>
      {children}
    </SoundContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSound = () => {
  const context = useContext(SoundContext);
  return context;
};

export default SoundProvider;
