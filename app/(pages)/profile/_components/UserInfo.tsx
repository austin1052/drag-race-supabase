"use client";

import styled from "styled-components";
import { queenImages } from "@/app/_assets";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
`;

const ProfilePicture = styled.div`
  position: relative;
  margin-right: 1rem;
  border-radius: 4px;

  img {
    border-radius: 4px;
  }
`;

const UserInfoContainer = styled.div`
  position: relative;
  width: 100%;
`;

const UserName = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
  transform: translateY(-8px);
`;

const HouseName = styled.div`
  font-weight: 400;
  color: var(--black);
  position: absolute;
  bottom: -1px;
  width: 100%;
  line-height: 18px;

  &:before {
    content: "haus of";
    font-style: italic;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    color: var(--accent-opaque);
    position: absolute;
    top: -20px;
    transform: translateX(5px);
  }

  @media (prefers-color-scheme: dark) {
    color: var(--accent);

    &:before {
      color: var(--mid);
    }
  }
`;

console.log("render");

export default function UserInfo() {
  return (
    <>
      <Container>
        <ProfilePicture>
          <Image
            src={queenImages.jimbo.src}
            width="80"
            height="80"
            alt="User profile image"
          />
        </ProfilePicture>
        <UserInfoContainer>
          {/* <UserName>Austin Cox</UserName>
          <HouseName>all natural corn kitty litter</HouseName> */}
          {/* <UserName>Emily Harrison</UserName>
          <HouseName>Litter robot for president 2024</HouseName> */}
          <UserName>Amanda Sanders</UserName>
          <HouseName>peppa pig stans rise up and f*ckin whistle!</HouseName>
        </UserInfoContainer>
      </Container>
    </>
  );
}
