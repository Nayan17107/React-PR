import { useState } from "react";
import "./index.css";

function Calc() {
    const [string, setString] = useState("");

    const handleClick = (value) => {
        if (value === "=") {
            try {
                setString(eval(string).toString());
            } catch {
                setString("Error");
            }
        } else if (value === "C") {
            setString("");
        } else if (value === "←") {
            setString(string.slice(0, -1));
        } else {
            setString(string + value);
        }
    };

    return (
        <div className="wrapper">
            <div className="calculator">
                <div className="display">{string || "0"}</div>

                <button className="special" onClick={() => handleClick("C")}>C</button>
                <button className="special" onClick={() => handleClick("←")}>←</button>
                <button className="operator" onClick={() => handleClick("/")}>÷</button>
                <button className="operator" onClick={() => handleClick("*")}>×</button>

                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button className="operator" onClick={() => handleClick("-")}>−</button>

                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button className="operator" onClick={() => handleClick("+")}>+</button>

                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button className="equal" onClick={() => handleClick("=")}>=</button>

                <button onClick={() => handleClick("00")}>00</button>
                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={() => handleClick(".")}>.</button>
            </div>
        </div>
    );
}

export default Calc;
