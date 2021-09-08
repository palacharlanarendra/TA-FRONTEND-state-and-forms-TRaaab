import React from 'react';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            counter : 0,
            step : 5,
            max : 15
        }
    }

    handlInc = () => {
        this.setState({
            counter : this.state.counter + this.state.step > this.state.max ? this.state.counter : this.state.counter + this.state.step
        })
    }

    handleDec = () => {
        this.setState({
            counter : this.state.counter - this.state.step
        })
    }

    handleReset = () => {
        this.setState({
            counter : 0,
            step : 5,
            max : 15
        })
    }
    render(){
        var steps = [5,10,15];
        var maxcount = [15,100,200];
        return(
            <div className="app">
                <h2>Counter Application</h2>
                <h1>{this.state.counter}</h1>
                <div >
                    <h2>Steps</h2>
                    <div className="steps_max steps">
                        {
                            steps.map((each) => (
                                <button className={this.state.step === each ? "active" : ""}  onClick={() => {
                                    this.setState({step : each})
                                }}>{each}</button>
                            ))
                        }
                    </div>
                </div>


                <div >
                    <h2>Max Category</h2>
                    <div className="steps_max max">
                        {
                            maxcount.map((count) =>  (
                                <button className={this.state.max === count ? "activ_count" : ""} onClick={() => this.setState({
                                    max : count
                                })}>{count}</button>
                            ))
                        }
                    </div>
                </div>


               <div>
                   <h2 className="inc_dec">Increament , Decreament , and Reset</h2>
                    <div className="inc_dec_res">
                        <button onClick={this.handlInc}>Increament</button>
                        <button onClick={this.handleDec}>Decreament</button>
                        <button onClick={this.handleReset}>Reset</button>
                    </div>
               </div>
            </div>
        )
    }
}

export default App;
