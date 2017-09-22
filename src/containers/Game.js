/**
 * Created by admin on 9/21/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {squareClick, historyListClick} from '../actions/Actions';
import Board from '../components/Board';
import {calculateWinner} from '../services/WinnerHelper';

class Game extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i) {
        this.props.dispatch(squareClick(i));
    }

    jumpTo(move) {
        this.props.dispatch(historyListClick(move));
    }

    render() {
        let history = this.props.history;
        let current = history[this.props.stepNumber];
        let winner = calculateWinner(current.squares);

        let moves = history.map((step, move) => {
            let desc = move ? 'Move #' + move : 'Game start';
            return (
                <li key={move}>
                    <a href="#" onClick={this.jumpTo.bind(this, move)}>{desc}</a>
                </li>
            )
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.props.isXNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        handleClick={this.handleClick}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {history, stepNumber, isXNext} = state;
    return {
        history,
        stepNumber,
        isXNext
    }
}

export default connect(mapStateToProps)(Game);
