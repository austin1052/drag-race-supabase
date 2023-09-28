"use client";

import { useContext, useMemo } from "react";
import Image from "next/image";
import { queenImages } from "@/test-data/images/images";
import styles from "@/app/(pages)/profile/_styles/index.module.css";

import styled, { keyframes } from "styled-components";
import { Underline } from "../page";
import { ProfileContext } from "@/app/_context/ProfileContext";

const userTeams = ["premier", "ep. 1", "ep. 2"];

interface Team {
  id: string;
  name: string;
  active: boolean;
  placement: number;
  points: number;
}

interface Teams {
  [key: string]: Team[]; // Index signature to allow different keys mapping to arrays of Team objects
}

const teams: Teams = {
  premier: [
    {
      id: "amethyst",
      name: "Amethyst",
      active: true,
      placement: 1,
      points: 1420,
    },
    {
      id: "anetra",
      name: "Anetra",
      active: true,
      placement: 2,
      points: 560,
    },
    {
      id: "auramayari",
      name: "Aura Mayari",
      active: true,
      placement: 3,
      points: 225,
    },
    {
      id: "irenedubois",
      name: "Irene Dubois",
      active: true,
      placement: 4,
      points: 300,
    },
    {
      id: "jax",
      name: "Jax",
      active: true,
      placement: 5,
      points: 368,
    },
    {
      id: "looseyladuca",
      name: "Loosey LaDuca",
      active: true,
      placement: 6,
      points: 100,
    },
    {
      id: "luxxnoirlondon",
      name: "Luxx Noir London",
      active: true,
      placement: 7,
      points: 85,
    },
    {
      id: "mbdf",
      name: "Malaysia Babydoll Foxx",
      active: true,
      placement: 8,
      points: 260,
    },
    {
      id: "marciax3",
      name: "Marcia Marcia Marcia",
      active: true,
      placement: 9,
      points: 280,
    },
    {
      id: "mib",
      name: "Mistress Isabelle Brooks",
      active: true,
      placement: 10,
      points: 1330,
    },
    {
      id: "princesspoppy",
      name: "Princess Poppy",
      active: true,
      placement: 11,
      points: 330,
    },
    {
      id: "robinfierce",
      name: "Robin Fierce",
      active: true,
      placement: 12,
      points: 410,
    },
    {
      id: "salinaestitties",
      name: "Salina EsTitties",
      active: true,
      placement: 13,
      points: 50,
    },
    {
      id: "sashacolby",
      name: "Sasha Colby",
      active: true,
      placement: 14,
      points: 130,
    },
    {
      id: "spice",
      name: "Spice",
      active: true,
      placement: 15,
      points: 200,
    },
    {
      id: "sugar",
      name: "Sugar",
      active: true,
      placement: 16,
      points: 200,
    },
  ],
  "ep. 1": [
    {
      id: "amethyst",
      name: "Amethyst",
      active: true,
      placement: 1,
      points: 480,
    },
    {
      id: "anetra",
      name: "Anetra",
      active: true,
      placement: 2,
      points: 760,
    },
    {
      id: "auramayari",
      name: "Aura Mayari",
      active: true,
      placement: 3,
      points: 325,
    },
    {
      id: "jax",
      name: "Jax",
      active: true,
      placement: 4,
      points: 420,
    },
    {
      id: "looseyladuca",
      name: "Loosey LaDuca",
      active: true,
      placement: 5,
      points: 195,
    },
    {
      id: "luxxnoirlondon",
      name: "Luxx Noir London",
      active: true,
      placement: 6,
      points: 125,
    },
    {
      id: "mbdf",
      name: "Malaysia Babydoll Foxx",
      active: true,
      placement: 7,
      points: 270,
    },
    {
      id: "marciax3",
      name: "Marcia Marcia Marcia",
      active: true,
      placement: 8,
      points: 420,
    },
    {
      id: "mib",
      name: "Mistress Isabelle Brooks",
      active: true,
      placement: 9,
      points: 385,
    },
    {
      id: "princesspoppy",
      name: "Princess Poppy",
      active: true,
      placement: 10,
      points: 430,
    },
    {
      id: "robinfierce",
      name: "Robin Fierce",
      active: true,
      placement: 11,
      points: 510,
    },
    {
      id: "salinaestitties",
      name: "Salina EsTitties",
      active: true,
      placement: 12,
      points: 120,
    },
    {
      id: "sashacolby",
      name: "Sasha Colby",
      active: true,
      placement: 13,
      points: 155,
    },
    {
      id: "spice",
      name: "Spice",
      active: true,
      placement: 14,
      points: 250,
    },
    {
      id: "sugar",
      name: "Sugar",
      active: true,
      placement: 15,
      points: 250,
    },
  ],
};

const QueenTeams = styled.div`
  margin-bottom: 4.5rem;
`;

const slide = keyframes`
  from {
    transform: translateY(-15px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const Queen = styled.div<{ $delay: number }>`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  animation: ${slide} 800ms ease-out both;
  animation-delay: ${(props) => props.$delay}ms;

  .placement {
    margin-right: 1rem;
    align-self: center;
    transform: translateY(-3px);
    display: flex;
    justify-content: center;
    width: 24px;
  }

  .placement > div {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--accent);
  }

  .points {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--accent);
    margin-left: auto;
  }
`;

const QueenImage = styled.div`
  position: relative;
  margin-right: 1rem;
  border-radius: 4px;

  img {
    border-radius: 4px;
  }
`;

const TotalPoints = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: var(--white-opaque);

  .total-points-text {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .total-points {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--accent);
  }

  @media (prefers-color-scheme: dark) {
    background: var(--dark-opaque);
  }
`;

const TotalPointsContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export default function Teams() {
  const { activeTeam } = useContext(ProfileContext);

  const totalPoints = teams[activeTeam].reduce((accumulator, currentValue) => {
    return accumulator + currentValue.points;
  }, 0);

  const formattedTotalPoints = totalPoints.toLocaleString();
  console.log(totalPoints);
  return (
    <>
      <QueenTeams>
        {teams[activeTeam].map((queen, i) => {
          let delay = i * 100;
          return (
            <Queen key={`${activeTeam}-${queen.id}`} $delay={delay}>
              <div className="placement">
                <div>{queen.placement}</div>
              </div>
              <QueenImage>
                <Image
                  src={queenImages[queen.id]}
                  width="60"
                  height="60"
                  alt="User profile image"
                />
              </QueenImage>
              <div className="name">{queen.name}</div>
              <div className="points">{queen.points}</div>
            </Queen>
          );
        })}
        <TotalPointsContainer>
          <Underline></Underline>
          <TotalPoints className={styles.totalPoints}>
            <div className="total-points-text">total points:</div>
            <div className="total-points">{formattedTotalPoints}</div>
          </TotalPoints>
        </TotalPointsContainer>
      </QueenTeams>
    </>
  );
}
