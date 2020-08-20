import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../Redux/Actions/counterAction';
import Users from './ReduxUsers';

const ReduxTest = () => {

    const count = useSelector(state => state.counterReducer.count)
    const dispatch = useDispatch()

    return (
        <div>
            <div className="text-center py-5">
                <h1>Counter {count}</h1>
                <button type="button" onClick={() => dispatch(increment(5))}>Increment</button>
                <button type="button" onClick={() => dispatch(decrement(1))}>Decrement</button>
            </div>
            <Users />
        </div>
    );
};

export default ReduxTest;