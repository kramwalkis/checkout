import styles from "./cell.module.css";
import useRandomNumber from "../../hooks/useRandomNumber";

interface CellOptions {
  backgroundColor: string;
  size: number;
  zIndex: number;
}


const Cell = ({ backgroundColor, size, zIndex }: CellOptions) => {
  const [numbers, intervalLength] = useRandomNumber(size);
  const group = zIndex % 4;
  const top = numbers[0];
  const left = numbers[1];

  const sign1 = Math.random() < 0.5 ? true : false
  const sign2 = Math.random() < 0.5 ? true : false
 
  const style = {
    backgroundColor,
    top: `${sign1 ? `${top}rem` : `-${top}rem`}`,
    left: `${sign2 ? `${left}rem` : `-${left}rem`}`,
    animationDuration: `${intervalLength}s`,
    animationDirection: "alternate",
    animationFillMode: "forwards",
    animationIterationCount: "infinite",
    zIndex,
  };

  return (
    <div
      style={style}
      className={`${styles.cell} ${styles[`cell${group}`]}`}
    ></div>
  );
};

export default Cell;
