import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [CalVal, SetCalVal] = useState("");
  const onButtonClick = (buttontext) => {
    if (buttontext === "C") {
      SetCalVal("");
    } else if (buttontext === "Ans") {
      const result = eval(CalVal);
      SetCalVal(result);
    } else {
      const newDisplayValue = CalVal + buttontext;
      SetCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={CalVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
