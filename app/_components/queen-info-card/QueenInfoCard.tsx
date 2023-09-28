import QueenImage from "./QueenImage";
import styles from "@/app/_components//queen-info-card/styles/index.module.css";
import styled from "styled-components";

// const

const QueenInfoCard = ({ queen }: any) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <QueenImage queen={queen} />
        </div>
        <div className={styles.queenName}>
          <div>{queen.name}</div>
        </div>
      </div>
    </>
  );
};

export default QueenInfoCard;
