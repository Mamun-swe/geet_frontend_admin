import React, { useEffect } from 'react';
import UsersTable from '../../Components/UsersTable';
import { useSelector, useDispatch } from 'react-redux';
import { usersList } from '../../Redux/Actions/usersAction';
import Loader from '../../Components/Loading';

const Index = () => {

    const dispatch = useDispatch()
    const { loading, users, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(usersList());
    }, [dispatch]);

    return (
        <div className="index">
            {loading ?
                <Loader /> :
                error ?
                    <h3 className="text-danger">{error}</h3> :
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 pb-2 pr-lg-4">
                                <div className="d-flex">
                                    <div className="flex-fill">
                                        <input
                                            type="text"
                                            className="form-control rounded-0 shadow-none border-0"
                                            placeholder="Search for ..."
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 pr-lg-4">
                                <UsersTable users={users} />
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Index;