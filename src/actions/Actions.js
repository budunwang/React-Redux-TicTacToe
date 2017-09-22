/**
 * Created by admin on 9/21/2017.
 */
export const SQUARE_CLICK = 'SQUARE_CLICK';
export const HISTORY_LIST_CLICK = 'HISTORY_LIST_CLICK';

export function squareClick(index) {
    return {
        type: SQUARE_CLICK,
        squareIndex: index
    }
}

export function historyListClick(index) {
    return {
        type: HISTORY_LIST_CLICK,
        historyListIndex: index
    }
}