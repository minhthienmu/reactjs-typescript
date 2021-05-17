import { FC } from "react";

interface Props {
  temperature: string;
  scale: string;
  onTemperatureChange: (temperature: string) => void;
  onScaleChange: (scale: string) => void;
}

const scaleNames: any = {
  c: "Celsius",
  f: "Fahrenheit",
};

const TemperatureInput: FC<Props> = ({
  temperature,
  scale,
  onTemperatureChange,
  onScaleChange,
}) => {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        type="number"
        value={temperature}
        onChange={(e) => {
          onTemperatureChange(e.target.value);
          onScaleChange(scale);
        }}
      />
    </fieldset>
  );
};

export default TemperatureInput;
