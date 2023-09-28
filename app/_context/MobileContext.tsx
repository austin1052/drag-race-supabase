import { useState, useEffect, createContext } from "react";

export const MobileContext = createContext<boolean>(true);

export function MobileContextProvider({ children }: any) {
  const [isMobile, setIsMobile] = useState(true);
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if (width) {
      width > 768 ? setIsMobile(false) : setIsMobile(true);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
}
