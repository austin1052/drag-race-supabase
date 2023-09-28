"use client";
import { styled } from "styled-components";

const Header = styled.h1`
  font-size: 1.5rem;
  color: var(--accent);
`;

export default function emailConfirmed() {
  return <Header>email confirmed</Header>;
}
