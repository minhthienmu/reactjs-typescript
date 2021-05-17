import { FC, useState } from "react";
import BoiLingVerdict from "./boilingVerdict";
import TemperatureInput from "./temperatureInput";

const Calculator: FC = () => {
  const [temperature, setTemperature] = useState<string>("");
  const [scale, setScale] = useState<string>("c");

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={setTemperature}
        onScaleChange={setScale}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={setTemperature}
        onScaleChange={setScale}
      />
      <BoiLingVerdict celsius={Number(celsius)}></BoiLingVerdict>
    </div>
  );
};

const toCelsius = (fahrenheit: number) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const toFahrenheit = (celsius: number) => {
  return (celsius * 9) / 5 + 32;
};

const tryConvert = (temperature: string, convert: Function) => {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};

export default Calculator;
