"use client";

import { useContext } from "react";
import { NavContext } from "@/app/_context/NavContext";
import Button from "./Button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function LogoutButton({
  style,
}: {
  style: "underline" | "solid";
}) {
  const { setMenuVisible } = useContext(NavContext);
  const router = useRouter();

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient();

  const signOut = async () => {
    setMenuVisible(false);
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div data-testid="log-out-button" className="">
      <Button onClick={signOut} text={"log out"} style={style} />
    </div>
  );
}
