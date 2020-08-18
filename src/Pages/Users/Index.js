import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../api';
import UsersTable from '../../Components/UsersTable';

const Index = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = () => {
            axios.get(`${api}users`)
                .then(res => {
                    setUsers(res.data)
                })
                .catch(err => {
                    if (err) {
                        console.log(err);
                    }
                })
        }

        fetchUsers();
    }, [])


    return (
        <div className="index">
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
        </div>
    );
};

export default Index;