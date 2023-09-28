"use client";

import { useState, useEffect, useRef } from "react";
import { ProfileContextProvider } from "@/app/_context/ProfileContext";
import UserInfo from "@/app/(pages)/profile/_components/UserInfo";
import ProfileNav from "@/app/(pages)/profile/_components/ProfileNav";
import EpisodeTabs from "./_components/EpisodeTabs";
import Teams from "@/app/(pages)/profile/_components/Teams";

import styles from "@/app/(pages)/profile/_styles/index.module.css";

import styled from "styled-components";

const ProfilePage = styled.div`
  width: 100%;
`;

const NavContainer = styled.div`
  position: sticky;
  top: 68.17px;
  z-index: 50;
  width: calc(100% + 2 * var(--margin-mobile));
  transform: translateX(calc(-1 * var(--margin-mobile)));
  padding: 0 var(--margin-mobile);
  margin-bottom: 1.5rem;
`;
// border-bottom: 1px solid var(--accent);

const Underline = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 100%;
  background-color: var(--black);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    var(--black) 20%,
    var(--black) 80%,
    rgba(0, 0, 0, 0) 100%
  );

  @media (prefers-color-scheme: dark) {
    background-color: var(--white);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      var(--accent) 20%,
      var(--accent) 80%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

export default function Profile() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = navRef?.current?.getBoundingClientRect();
      if (!rect) return;
      if (rect.top <= 70) {
        setIsStuck(true);
      } else {
        setIsStuck(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ProfileContextProvider>
      <ProfilePage>
        <UserInfo />
        <NavContainer className={isStuck ? styles.backdrop : ""} ref={navRef}>
          <ProfileNav />
          <Underline></Underline>
          <EpisodeTabs></EpisodeTabs>
          <Underline></Underline>
        </NavContainer>
        <Teams />
      </ProfilePage>
    </ProfileContextProvider>
  );
}
