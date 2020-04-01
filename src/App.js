import React from "react";
import Button from "./components/Button";

function App() {
    const submit = e => {
        e.preventDefault();
        console.log("calculatin...");
    };
    return (
        <div className="App">
            <header className="tc pv4 pv5-ns">
                <h1 className="f5 f4-ns fw6 mid-gray">Tip calculator</h1>
            </header>
            <Button onClick={submit}>Calculate!!!</Button>
        </div>
    );
}

export default App;
