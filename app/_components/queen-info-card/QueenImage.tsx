import { queenImages } from "@/app/_assets";

const QueenImage = ({ queen }: any) => {
  const id = queen.id;
  const name = queen.name;
  const image = queenImages[id].src;

  return <img src={image} alt={name} />;
};

export default QueenImage;
