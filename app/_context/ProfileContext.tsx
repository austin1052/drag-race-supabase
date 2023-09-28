"use client";

import { useState, createContext } from "react";

export interface ProfileContext {
  activeTeam: string;
  setActiveTeam: React.Dispatch<React.SetStateAction<string>>;
}

export const ProfileContext = createContext<ProfileContext>({
  activeTeam: "premier",
  setActiveTeam: () => {},
});

export function ProfileContextProvider({ children }: any) {
  const [activeTeam, setActiveTeam] = useState<string>("premier");
  return (
    <ProfileContext.Provider value={{ activeTeam, setActiveTeam }}>
      {children}
    </ProfileContext.Provider>
  );
}
