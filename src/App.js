import React, { useState } from "react";
import Button from "./components/Button";

function App() {
    const submit = e => {
        e.preventDefault();
        setUpdating(false);
        const tip = (total.value / 100) * percentage.value;
        setTip(tip);
    };

    function useControlledInput(initial) {
        const [value, setValue] = useState(initial);
        return {
            value,
            onChange: e => {
                setUpdating(true);
                setValue(parseInt(e.target.value, 10));
            }
        };
    }

    const total = useControlledInput(null);
    const percentage = useControlledInput(null);
    const [tip, setTip] = useState(null);
    const [updating, setUpdating] = useState(false);

    // const setTotal = total => setState({ ...state, total });
    // const setPercentage = percentage => setState({ ...state, percentage });

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
                                {...total}
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
                                {...percentage}
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
                    {tip === 0 && (
                        <div className="pv1">
                            <h2 className="orange">
                                Please enter some numbers above!
                            </h2>
                        </div>
                    )}
                    {tip !== 0 && tip !== null && !updating && (
                        <div className="pv1">
                            <h2 className="result">So...</h2>
                            <h3>
                                Total: ${total.value} + <br />
                                Tip: ${Math.round(tip * 100) / 100}
                                =&nbsp;
                                <br />
                                <br />
                                <span className="purple">
                                    $
                                    {Math.round((total.value + tip) * 100) /
                                        100}
                                </span>
                            </h3>
                        </div>
                    )}
                </form>
            </section>
        </div>
    );
}

export default App;
