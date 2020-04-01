import React, { useState } from "react";
import Button from "./components/Button";

function App() {
    const submit = e => {
        e.preventDefault();
        const tip = (state.total / 100) * state.percentage;
        setState({ ...state, tip });
    };

    const initial = {
        total: null,
        percentage: null,
        tip: null
    };

    const [state, setState] = useState(initial);

    const setTotal = total => setState({ ...state, total });
    const setPercentage = percentage => setState({ ...state, percentage });

    return (
        <div className="App">
            <section className="pa3 black-90 bg-white">
                <header className="tc pv1 pv2-ns">
                    <h1>Tip calculator</h1>
                </header>
                <form className="pa0 black-80">
                    <div className="fl w-100 w-100-m w-50-l pv1 pr0-m pr2-l">
                        <div className="bg-white pv4">
                            <label htmlFor="name" className="f6 b db mb2">
                                Bill total
                            </label>
                            <input
                                id="total"
                                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                                type="number"
                                aria-describedby="total-desc"
                                name="total"
                                value={state.total}
                                onChange={e => {
                                    setTotal(parseInt(e.target.value, 10));
                                }}
                            />
                            <small
                                id="total-desc"
                                className="f6 black-60 db mb2"
                            >
                                Enter the bill total
                            </small>
                        </div>
                    </div>

                    <div className="fl w-100 w-100-m w-50-l pv1 pr0-m pr2-l">
                        <div className="bg-white pv4">
                            <label htmlFor="name" className="f6 b db mb2">
                                Tip percentage
                            </label>
                            <input
                                id="tip"
                                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                                type="number"
                                aria-describedby="tip-desc"
                                name="tip"
                                value={state.percentage}
                                onChange={e => {
                                    setPercentage(parseInt(e.target.value, 10));
                                }}
                            />
                            <small id="tip-desc" className="f6 black-60 db mb2">
                                Enter tip as percentage of the bill (e.g.
                                entering 20 means "I want to add a tip of 20%")
                            </small>
                        </div>
                    </div>
                    <div className="pv1">
                        <Button
                            className="f6 link dim br1 ph3 pv2 mb2 dib white bg-black"
                            onClick={submit}
                        >
                            Calculate!
                        </Button>
                    </div>
                    {state.tip === 0 && (
                        <div className="pv1">
                            <h2 className="orange">
                                Please enter some numbers above!
                            </h2>
                        </div>
                    )}
                    {state.tip !== 0 && state.tip !== null && (
                        <div className="pv1">
                            <h2 className="result">
                                ${state.total} (total) + ${state.tip} (tip) ={" "}
                                <span className="purple">
                                    ${state.total + state.tip}
                                </span>
                            </h2>
                        </div>
                    )}
                </form>
            </section>
        </div>
    );
}

export default App;
