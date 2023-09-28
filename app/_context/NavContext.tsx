"use client";

import { useState, useEffect, createContext } from "react";

export interface NavContext {
  menuVisible: boolean | null;
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const NavContext = createContext<NavContext>({
  menuVisible: false,
  setMenuVisible: () => {},
});

export function NavContextProvider({ children }: any) {
  const [menuVisible, setMenuVisible] = useState<boolean | null>(false);

  return (
    <NavContext.Provider value={{ menuVisible, setMenuVisible }}>
      {children}
    </NavContext.Provider>
  );
}
