import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersList } from '../../Redux/Actions/usersAction';

const ReduxUsers = () => {

    const dispatch = useDispatch()
    const { loading, users, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(usersList());
    }, [dispatch]);

    return (
        <div>
            {loading ?
                <h5>Loading...</h5> :
                error ?
                    <h5>{error}</h5> :
                    <div>
                        <ul>
                            {users.map((user, i) =>
                                <li key={i}>{user.name}</li>
                            )}
                        </ul>
                    </div>
            }
        </div>
    );
};

export default ReduxUsers;