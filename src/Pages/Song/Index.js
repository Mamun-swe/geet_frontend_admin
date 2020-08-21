import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { songsList } from '../../Redux/Actions/songsAction';
import SongTable from '../../Components/SongTable';
import Loader from '../../Components/Loading';

const Index = () => {
    const dispatch = useDispatch();
    const { loading, songs, error } = useSelector((state => state.songs))

    useEffect(() => {
        dispatch(songsList());
    }, [dispatch])


    return (
        <div className="index">
            {loading ? <Loader /> :
                error ?
                    <h3 className="text-danger">{error}</h3> :
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
                                            to="/admin/songs/create"
                                            className="btn btn-unique shadow-none text-white px-3"
                                        >Make New</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 pr-lg-4">
                                <SongTable songs={songs} />
                            </div>

                        </div>
                    </div>
            }
        </div>
    );
};

export default Index;