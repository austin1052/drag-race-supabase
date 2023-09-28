"use client";

import { useState, useEffect, useContext, useRef } from "react";
import { NavContext } from "@/app/_context/NavContext";
import { usePathname } from "next/navigation";
import Button from "./Button";
import LogoutButton from "./LogoutButton";
import styles from "@/app/_styles/Nav.module.css";
import lineStyles from "@/app/_styles/Line.module.css";
import { Session } from "@supabase/supabase-js";
import Duck from "./Duck";

export default function Nav({ session }: { session: Session | null }) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navBarStyle, setNavBarStyle] = useState(`${styles.nav} ${styles.top}`);
  const [navMenuStyle, setNavMenuStyle] = useState(
    `${styles.navMenu} ${styles.navMenuHidden}`
  );
  const { menuVisible, setMenuVisible } = useContext(NavContext);

  const navMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = ["Home", "Profile", "Leagues", "Shop"];

  const path = usePathname();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      // need to check if windowScrollY is > 0 for phones that may have a bounce animation when scrolling to the top of the page
      // if (window.scrollY > 0 && window.scrollY > lastScrollY) {
      //   // if scroll down hide the navbar
      //   setNavBarStyle(`${styles.nav} ${styles.hidden}`);
      // } else if (window.scrollY + 5 < lastScrollY) {
      //   // if scroll up show the navbar
      //   setNavBarStyle(`${styles.nav}`);
      // } else if (window.scrollY <= 0) {
      //   setNavBarStyle(`${styles.nav} ${styles.top}`);
      // }
      if (window.scrollY <= 0) {
        setNavBarStyle(`${styles.nav} ${styles.top}`);
      } else {
        setNavBarStyle(`${styles.nav}`);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && menuVisible !== true) {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, menuVisible]);

  useEffect(() => {
    const menuStyle = menuVisible
      ? `${styles.navMenu}`
      : `${styles.navMenu} ${styles.navMenuHidden}`;

    setNavMenuStyle(menuStyle);
  }, [menuVisible]);

  const handleDisplayNavMenu = () => {
    console.log(menuVisible);
    if (menuVisible === false || menuVisible === null) {
      console.log("set true");
      setMenuVisible(true);
    } else {
      console.log("set false");
      setMenuVisible(false);
    }
  };

  return (
    <>
      <nav className={navBarStyle}>
        <>
          {session ? (
            // Display Duck component if the session exists and the path is not "/"
            path !== "/" && (
              <div className={styles.duck}>
                <Duck />
              </div>
            )
          ) : // Display login button if there is no session
          path !== "/login" && !menuVisible ? (
            <div className={styles.loginButton}>
              <Button href={"/login"} text={"log in"} style="underline" />
            </div>
          ) : (
            // Display Duck component if the path is "/login"
            <div className={styles.duck}>
              <Duck />
            </div>
          )}
        </>

        {path !== "/login" && (
          <div className={styles.menuButton}>
            <Button
              onClick={handleDisplayNavMenu}
              text={menuVisible ? "close" : "menu"}
              style="underline"
            />
          </div>
        )}
      </nav>

      <div className={navMenuStyle} ref={navMenuRef}>
        {menuVisible && (
          <ul className={styles.perspective}>
            {navLinks.map((link, i) => {
              const delay = i * 40;
              return <li style={{ animationDelay: `${delay}ms` }}>{link}</li>;
            })}
            <div className={styles.logOutButton}>
              <LogoutButton style="solid" />
            </div>
          </ul>
        )}

        <div className={lineStyles.middleLine} style={{ zIndex: "80" }}></div>
      </div>
    </>
  );
}
