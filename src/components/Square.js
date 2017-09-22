/**
 * Created by admin on 9/21/2017.
 */
import React from 'react';

export const Square = (props) => (
    <button className="square" onClick={props.handleClick}>
        {props.value}
    </button>
);
