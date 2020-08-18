import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import api from '../../api';
import CategoryTable from '../../Components/CategoryTable';

const Index = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = () => {
            axios.get(`${api}users`)
                .then(res => {
                    setCategories(res.data)
                })
                .catch(err => {
                    if (err) {
                        console.log(err);
                    }
                })
        }

        fetchCategories();
    }, [])


    return (
        <div className="index">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 pb-2 pr-lg-4">
                        <div className="d-flex">
                            <div className="flex-fill pr-3">
                                <input
                                    type="text"
                                    className="form-control rounded-0 shadow-none border-0"
                                    placeholder="Search for ..."
                                />
                            </div>
                            <div>
                                <Link
                                    to="/admin/category/create"
                                    className="btn btn-unique shadow-none text-white px-3"
                                >Make New</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 pr-lg-4">
                        <CategoryTable categories={categories} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Index;