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
  return (
    <Wrapper>
      <Screen value={0} />
      <ButtonBox>
        {btnValue.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={"button"}
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked!`);
              }}
            ></Button>
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
