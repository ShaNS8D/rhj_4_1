import { useState } from "react";
import { converter } from "../../utility/utility";

const HexToRgb = () => {
  const [inputHex, setInputHex] = useState("#e2e2e2");
  const [convert, setConvert] = useState({
    resultText: converter(inputHex),
    bgColor: converter(inputHex),
  });

  const regex = /#[\dabcdef]{6}$/;

  const handleChangeInput = (event) => {
    let result = event.target.value;
    setInputHex(result);

    if (result.length < 7) {
      return;
    }
    regex.test(result.toLowerCase())
      ? setConvert({
          resultText: converter(result),
          bgColor: converter(result),
        })
      : setConvert({ resultText: "Error" });
  };

  return (
    <div
      className="converter-color__wrapper"
      style={{ backgroundColor: convert.bgColor }}
    >
      <div className="converter-color__content">
        <div className="input-wrapper">
          <input
              className="hex2-input"
              type="text"
              placeholder="Введите значение..."
              value={inputHex}
              maxLength="7"
              onChange={handleChangeInput}
          />
        </div>
        <div className="result-wrapper">
          <span className="rgb-result">
              {inputHex.length > 6 ? convert.resultText : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HexToRgb;
