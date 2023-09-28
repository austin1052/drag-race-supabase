"use client";

import { useState } from "react";

import styled from "styled-components";
// import { Underline } from "../page";
// position: sticky;
// top: 4.5rem;

const Container = styled.div`
  overflow: hidden;
  position: relative:
  z-index: 50;
`;

const NavLinks = styled.div`
  display: flex;
  padding: 0.8rem 0rem 1rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SectionName = styled.div<{ $active?: boolean }>`
  color: ${(props) =>
    props.$active ? "var(--accent-opaque)" : "var(--mid-opaque)"};
  font-size: 1.5rem;
  font-weight: 400;
  white-space: nowrap;
  opacity: 1;

  &:not(:last-child) {
    margin-right: 1.25rem;
  }

  @media (prefers-color-scheme: dark) {
    color: ${(props) => (props.$active ? "var(--accent)" : "var(--mid)")};
  }
`;

const sections = ["queens", "leagues", "posts", "stats"];

export default function ProfileNav() {
  const [activeSection, setActiveSection] = useState<string>("queens");
  return (
    <Container>
      <NavLinks>
        {sections.map((section) => {
          return (
            <SectionName
              $active={section === activeSection}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </SectionName>
          );
        })}
        {/* <SectionName>leagues</SectionName>
        <SectionName>posts</SectionName>
        <SectionName>stats</SectionName> */}
      </NavLinks>
      {/* <Underline></Underline> */}
    </Container>
  );
}
