/**
 * Created by admin on 9/21/2017.
 */
import {SQUARE_CLICK, HISTORY_LIST_CLICK} from '../actions/Actions';
import {calculateWinner} from '../services/WinnerHelper';

export default function boardDisplay(state = INITIAL_GAME_STATE, action) {
    switch (action.type) {
        case SQUARE_CLICK:
            let history = state.history.slice(0, state.stepNumber + 1);
            let current = history[history.length - 1];
            let squares = current.squares.slice();
            if (calculateWinner(squares) || squares[action.squareIndex]) {
                return state;
            }
            squares[action.squareIndex] = state.isXNext ? 'X' : 'O';
            return {
                history: history.concat([{
                    squares: squares,
                }]),
                stepNumber: history.length,
                isXNext: !state.isXNext
            };
        case HISTORY_LIST_CLICK:
            return Object.assign({}, state, {
                stepNumber: action.historyListIndex,
                isXNext: (action.historyListIndex % 2 === 0)
            });
        default:
            return state;
    }
}

const INITIAL_GAME_STATE = {
    history: [{
        squares: new Array(9).fill(null),
    }],
    stepNumber: 0,
    isXNext: true
};
