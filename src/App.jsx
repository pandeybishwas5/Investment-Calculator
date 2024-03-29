import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 6,
    duration: 5,
});


const inputIsValid = userInput.duration >= 1;

function handleChange(id, value){
    setUserInput((prevValue) => ({
        ...prevValue,
        [id]: +value,
    }))
}


  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && <p className="center">Please enter a duration greater than 0.</p>}
    {inputIsValid && <Results input={userInput}/>}
    </>
    
  )
}

export default App
