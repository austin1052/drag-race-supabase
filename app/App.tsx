"use client";

import { NavContextProvider } from "./_context/NavContext";
import Nav from "@/app/_components/Nav";
import { Session } from "@supabase/supabase-js";

export default function App({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    // <NavContextProvider>
    <>
      {/* <Nav session={session} /> */}
      {/* <main className="">{children}</main> */}
      {/* </NavContextProvider> */}
    </>
  );
}
