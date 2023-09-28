"use client";

import { useState, useContext } from "react";
import { ProfileContext } from "@/app/_context/ProfileContext";
import styled from "styled-components";

const userTeams = [
  "premier",
  "ep. 1",
  "ep. 2",
  "ep. 3",
  "ep. 4",
  "ep. 5",
  "ep. 6",
];

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const EpisodeTab = styled.button<{ $active?: boolean }>`
  font-size: 0.8rem;
  color: var(--white);
  white-space: nowrap;

  border: none;
  background: ${(props) =>
    props.$active
      ? "linear-gradient(0deg, var(--accent) 0%, var(--accent-opaque) 100%)"
      : "linear-gradient(0deg, var(--mid) 0%, var(--mid-opaque) 100%)"};

  border-radius: var(--br);
  padding: 0.25rem 0.5rem;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  @media (prefers-color-scheme: dark) {
    color: var(--light);
    background: ${(props) =>
      props.$active
        ? "linear-gradient(0deg, var(--accent-dark) 0%, var(--accent) 100%)"
        : "linear-gradient(0deg, var(--mid-dark) 0%, var(--mid) 100%)"};
  }
`;

export default function EpisodeTabs() {
  const { activeTeam, setActiveTeam } = useContext(ProfileContext);

  function handleActiveTeam(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const button = e.target as HTMLElement;
    setActiveTeam(button.innerText);
    window.scrollTo({
      top: 152,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Container>
        {userTeams.map((team) => {
          return (
            <EpisodeTab
              $active={team === activeTeam}
              onClick={(e) => handleActiveTeam(e)}
            >
              {team}
            </EpisodeTab>
          );
        })}
      </Container>
    </>
  );
}
