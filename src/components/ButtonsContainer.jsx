import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const btns = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "Ans",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {btns.map((btn) => (
        <button className={styles.button} onClick={() => onButtonClick(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
