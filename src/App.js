import React, {Component} from 'react';
import './App.css';
import InfixToPostfix from "./util/InfixToPostfix";

class App extends Component {
    constructor() {
        super();
        this.state = {
            infix: '',
            postfix: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            infix: event.target.value,
            postfix: InfixToPostfix.convert(event.target.value.trim())
        });
    }

    render() {
        return (
            <div className="App">
                <h3>Infix</h3>
                <input id="infix" type="text" autoComplete="off" placeholder="Infix Expression"
                       value={this.state.infix}
                       onChange={this.handleChange}/>
                <h3>Postfix</h3>
                <div id="postfix">
                    {this.state.postfix}
                </div>
            </div>
        );
    }
}

export default App;
