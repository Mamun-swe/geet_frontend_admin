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
    const [selectedSingers, setSelectedSingers] = useState([])
    const [selectedAlbum, setSelectedAlbum] = useState({})
    const [singerErr, setSingerErr] = useState("")
    const [albumrErr, setAlbumErr] = useState("")

    useEffect(() => {
        // fetch singers
        const fetchSingers = async () => {
            try {
                const singers = await axios.get(`${api}users`)
                setAllSingers(singers.data)
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchSingers()
    }, [])

    const singerRenderList = () => {
        return (allSingers.map(data => ({ label: data.name, value: data.id })))
    }

    const albumRenderList = () => {
        return (allSingers.map(data => ({ label: data.name, value: data.id })))
    }

    const onChangeSingers = event => {
        setSelectedSingers(event)
    }

    const onChangeAlbum = event => {
        setSelectedAlbum(event)
    }

    const submitSong = data => {
        if (!selectedSingers || selectedSingers.length <= 0) {
            return setSingerErr('Singer is required.')
        }

        if (!selectedAlbum.value) {
            return setAlbumErr('Album is required.')
        }
        setSingerErr("")
        setAlbumErr("")

        const song = {
            title: data.title,
            singers: selectedSingers,
            album: selectedAlbum
        }

        console.log(song);


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
                                            name="title"
                                            className="form-control rounded-0 shadow-none"
                                            placeholder="Song title"
                                            ref={register({
                                                required: "Song title is required."
                                            })}
                                        />
                                    </div>

                                    {/* Singer */}
                                    <div className="form-group mb-4">
                                        {singerErr ? (
                                            <small className="text-danger">{singerErr}</small>
                                        ) : <small className="text-muted">Singer</small>}
                                        <Select
                                            isMulti
                                            options={singerRenderList()}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            placeholder="Select singer's"
                                            onChange={onChangeSingers}
                                        />
                                    </div>

                                    {/* Album */}
                                    <div className="form-group mb-4">
                                        {albumrErr ? (
                                            <small className="text-danger">{albumrErr}</small>
                                        ) : <small className="text-muted">Singer</small>}
                                        <Select
                                            options={albumRenderList()}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            placeholder="Select album"
                                            onChange={onChangeAlbum}
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary shadow-none text-white float-right" style={{ width: '120px', height: '40px' }}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;