import { getSession } from "@/supabase/utils";
import { redirect } from "next/navigation";
import QueenSelection from "./components/QueenSelection";

export default async function TeamSelection() {
  const session = await getSession();

  if (!session) {
    // This route can only be accessed by authenticated users.
    // Unauthenticated users will be redirected to the `/login` route.
    redirect("/login");
  }

  return (
    <>
      <QueenSelection />
    </>
  );
}
