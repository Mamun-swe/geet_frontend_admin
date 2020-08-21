import React, { useState, useEffect } from 'react';
import '../../style.scss';
import { Icon } from 'react-icons-kit';
import { Link } from 'react-router-dom';
import { ic_keyboard_arrow_left } from 'react-icons-kit/md';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import api from '../../Redux/api';
import Select from 'react-select';

const Create = () => {
    const { register, handleSubmit, errors } = useForm()
    const [allSingers, setAllSingers] = useState([])

    useEffect(() => {
        // fetch singers
        const fetchSingers = () => {
            axios.get(`${api}users`)
                .then(res => {
                    setAllSingers(res.data)
                })
                .catch(err => {
                    if (err) {
                        console.log(err);
                    }
                })
        }
        fetchSingers()

    }, [])

    const renderList = () => {
        return (allSingers.map(data => ({ label: data.name, value: data.id })))
    }

    const submitSong = data => {
        console.log(data);
    }



    return (
        <div className="create">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 pr-lg-4">
                        <div className="card border-0 rounded-0">
                            <div className="card-header bg-white">
                                <Link
                                    to="/admin/songs"
                                    type="button"
                                    className="btn btn-light rounded-0 shadow-none float-right"
                                >
                                    <Icon icon={ic_keyboard_arrow_left} size={20} />
                                </Link>
                            </div>
                            <div className="card-body py-4">
                                <form onSubmit={handleSubmit(submitSong)}>

                                    {/* Title */}
                                    <div className="form-group mb-4">
                                        {errors.title && errors.title.message ? (
                                            <small className="text-danger">{errors.title && errors.title.message}</small>
                                        ) : <small className="text-muted">Song Title</small>
                                        }
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control rounded-0 shadow-none"
                                            placeholder="Song title"
                                            ref={register({
                                                required: "Song title is required."
                                            })}
                                        />
                                    </div>

                                    {/* Singer */}
                                    <div className="form-group mb-4">
                                        {errors.singers && errors.singers.message ? (
                                            <small className="text-danger">{errors.singers && errors.singers.message}</small>
                                        ) : <small className="text-muted">Select singer's</small>
                                        }
                                        <Select
                                            // defaultValue={[allSingers[2].name, allSingers[3].name]}
                                            isMulti
                                            options={renderList()}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            ref={register({
                                                required: "Singer's is required."
                                            })}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary shadow-none text-white float-right">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// https://stackoverflow.com/questions/47672117/react-select-how-to-show-iterate-through-data-from-api-call-in-option-instea
// https://medium.com/how-to-react/react-select-dropdown-tutorial-using-react-select-51664ab8b6f3
// http://www.shahqaan.com/blog/react-select/

export default Create;