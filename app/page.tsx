import { getSession } from "@/supabase/utils";
import LogoutButton from "@/app/_components/LogoutButton";
import Logo from "@/app/_components/Logo";
import Nav from "@/app/_components/Nav";
import styles from "@/styles/LandingPage.module.css";
import animation from "@/styles/Nav.module.css";
import "./_styles/globals.css";
import Hero from "@/app/_components/Hero";
// import {getClient}

export default async function Index() {
  const session = await getSession();

  return (
    <>
      <Hero />
    </>
  );
}
