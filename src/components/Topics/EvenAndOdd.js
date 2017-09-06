import React, { Component } from 'react'

export default class EvenAndOdd extends Component {

    constructor () {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton"></button>
                <span className="resultsBox"></span>
                <span className="resultsBox"></span>

                </div>
        )
    }
}