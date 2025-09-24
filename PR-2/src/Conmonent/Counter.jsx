import React from "react";
import "../App.css";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    Increment() {
        this.setState({
            count: this.state.count + 1,
        });
    }

    Decrement() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1,
            });
        } else {
            alert("Counter is already zero");
        }
    }

    Reset() {
        this.setState({
            count: 0,
        });
    }

    render() {
        return (
            <div className="counter-container">
                <div className="logo">
                    <span className="logo-circle">⟳</span>
                    <h1 className="logo-text">Counter App</h1>
                </div>

                <div className="counter-card">
                    <h2 className="counter-value">{this.state.count}</h2>
                    <div className="btn-group">
                        <button className="btn btn-inc" onClick={() => this.Increment()}>
                            Increment
                        </button>
                        <button className="btn btn-dec" onClick={() => this.Decrement()}>
                            Decrement
                        </button>
                        <button className="btn btn-reset" onClick={() => this.Reset()}>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;
