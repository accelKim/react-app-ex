import React from 'react';

class App1 extends React.Component {
    state = {
        counter : 0,
    }
    onClick = ()=> {
        this.state.counter = this.state.counter + 1;
        //this.setState( cur=>({counter : cur.counter + 1}) );
    }
    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <p>{this.state.counter} Clicked</p>
                <button onClick={this.onClick}>Click!</button>
            </div>
        )
    }
}

export default App1;