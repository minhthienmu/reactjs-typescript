import { FC } from "react";

interface Props {
  celsius: Number;
}

const BoiLingVerdict: FC<Props> = (props) => {
  if (props.celsius >= 100) {
    return <p>Nước sôi.</p>;
  }
  return <p>Nước chưa sôi.</p>;
};

export default BoiLingVerdict;
