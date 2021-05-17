import { FC } from "react";
import "./App.scss";
import Calculator from "./component/calculator";

const App: FC = () => {
  return (
    <div className="App">
      <Calculator></Calculator>
    </div>
  );
};

export default App;
