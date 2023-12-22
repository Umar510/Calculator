import react, { useEffect, useState } from "react";

import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  // const [filterText, setFilterText] = useState("");
  const ops = ['+', '-', '*', '/'];

  const addToText = (val) => {
    // console.log(text.length);
    // console.log(text);
    if (text[0] === '0') {
      // alert("First Input can't be zero");
      setText(val);
    }
    else {
      setText((text) => [...text, val]);
    }
  };

  useEffect(() => {
  }, [text]);
  const deleteLast = () => {
    if (text === "") {
      return;
    }
    const del = text.slice(0, -1);
    setText(del);
  };
  //  const checkk=()=>{
  //   if()
  //   calculateResult();
  //  }
  const calculateResult = () => {
    console.log(('lenght is :', text.length))
    // console.log(text);
    try {
      if (text.includes('0')) {
        const newArr = text.filter(e => {
          if (e === '+' || e === '-' || e === '*' || e === '/') {
            let ind_add = (text.indexOf('+'));
            let ind_sub = (text.indexOf('-'));
            let ind_mul = (text.indexOf('*'));
            let ind_div = (text.indexOf('/'));

            // console.log(ind_add, ind_sub, ind_mul, ind_div);

            if (text[ind_add + 1] === '0') {

              text[ind_add + 1] = '';
              console.log(text);
            }

            if (text[ind_sub + 1] === '0') {
              text[ind_sub + 1] = '';
              console.log(text);
            }

            if (text[ind_mul + 1] === '0') {
              text[ind_mul + 1] = '';
              console.log(text);
            }

            if (text[ind_div + 1] === '0') {
              text[ind_div + 1] = '';
              console.log(text);
            }

          }
        })
      }
      const ex = text.join("");
      const finalResult = eval(ex);
      setText("");
      setResult(finalResult);
      const resultToString = finalResult.toString();
      addToText(resultToString)
      setText(resultToString)
      setResult("")
      if (isNaN(finalResult) || finalResult === Infinity) {
        setResult("") 
        setText("")
        alert("Denominator can't be zero")
      }
    } catch (error) {
      alert(error.message);
      setText("");
      setResult('');
    }
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };
  const buttonColor = "#f2a33c";
  const buttonColor1 = "black";
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" color={buttonColor} handleClick={calculateResult} />
          <Button symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row ">
          <Button symbol="Clear" color="red" handleClick={resetInput} />
          <Button symbol="DEL" color="red" handleClick={deleteLast} />
        </div>
      </div>
    </div>
  );
};
export default App;