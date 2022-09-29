import React, { Component } from 'react';

export default class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finance : 'Link Aja'
        }
    }

    gantiFinance(nama) {
        this.setState({
            finance : nama
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.finance}</h2>
                <button onClick={() => this.gantiFinance("Gopay")}>Change</button>
            </div>
        ) 
    }
}
