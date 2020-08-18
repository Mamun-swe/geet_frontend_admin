import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div className="dashboard">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <Link to="/admin/category">
                            <div className="card rounded-0 border-0">
                                <div className="flex-center flex-column text-center">
                                    <h5 className="mb-0">200</h5>
                                    <p className="mb-0">categories</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <Link to="/admin/album">
                            <div className="card rounded-0 border-0">
                                <div className="flex-center flex-column text-center">
                                    <h5 className="mb-0">200</h5>
                                    <p className="mb-0">albums</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <Link to="/admin/singer">
                            <div className="card rounded-0 border-0">
                                <div className="flex-center flex-column text-center">
                                    <h5 className="mb-0">200</h5>
                                    <p className="mb-0">singer</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <Link to="/admin/songs">
                            <div className="card rounded-0 border-0">
                                <div className="flex-center flex-column text-center">
                                    <h5 className="mb-0">200</h5>
                                    <p className="mb-0">song's</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <Link to="/admin/users">
                            <div className="card rounded-0 border-0">
                                <div className="flex-center flex-column text-center">
                                    <h5 className="mb-0">200</h5>
                                    <p className="mb-0">users</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                        <Link to="/admin/">
                            <div className="card rounded-0 border-0">
                                <div className="flex-center flex-column text-center">
                                    <h5 className="mb-0">20</h5>
                                    <p className="mb-0">admin</p>
                                </div>
                            </div>
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Index;