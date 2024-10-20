import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ButtonBox from "./components/ButtonBox";
import Screen from "./components/Screen";
import Wrapper from "./components/Wrapper";

const btnValue = [
  ["C", "+-", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

function App() {
  const [calculate, setCalculate] = useState({ sing: "", num: 0, res: 0 });

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(e.target.innerHTML);
    console.log(calculate.num.toString.length);

    if (calculate.num.length < 9) {
      setCalculate({
        ...calculate,
        num:
          calculate.num === 0 && value === "0"
            ? "0"
            : calculate.num % 1 === 0
            ? Number(calculate.num + value)
            : calculate.num + value,
        res: !calculate.sign ? 0 : calculate.res,
      });
    }
  };

  const resetClickHandler = () => {
    setCalculate({
      ...calculate,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  return (
    <Wrapper>
      <Screen value={calculate.num ? calculate.num : calculate.res} />
      <ButtonBox>
        {btnValue.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={"button"}
              value={btn}
              onClick={btn === "C" ? resetClickHandler : numberClickHandler}
            ></Button>
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
