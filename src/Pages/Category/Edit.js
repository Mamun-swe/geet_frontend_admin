import React, { useState } from 'react';
import '../../style.scss';
import { Icon } from 'react-icons-kit';
import { Link } from 'react-router-dom';
import { ic_keyboard_arrow_left } from 'react-icons-kit/md';
import { camera } from 'react-icons-kit/icomoon/camera';
import { useForm } from 'react-hook-form';

import testImg from '../../assets/test.jpg';

const Edit = ({ match }) => {
    const { register, handleSubmit, errors } = useForm()
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewURL, setPreviewURL] = useState(null)
    const [sizeLimit, setSizeLimit] = useState(false)

    // const catId = match.params.id

    // Image onChange
    const imageChangeHandeller = event => {
        let file = event.target.files[0]
        if (file && file.size < 50000) {
            setSizeLimit(false)
            setSelectedFile(file)
            setPreviewURL(URL.createObjectURL(event.target.files[0]))
        } else {
            setSizeLimit(true)
        }
    }

    const submitCategory = data => {
        // let formData = new FormData()
        // formData.append('name', data.name)
        // formData.append('image', selectedFile)
        console.log(data);
    }

    return (
        <div className="edit">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12 pr-lg-4">
                        <div className="card border-0 rounded-0">
                            <div className="card-header bg-white">
                                <Link
                                    to="/admin/category"
                                    type="button"
                                    className="btn btn-light rounded-0 shadow-none float-right"
                                >
                                    <Icon icon={ic_keyboard_arrow_left} size={20} />
                                </Link>
                            </div>
                            <div className="card-body py-4">
                                <form onSubmit={handleSubmit(submitCategory)}>
                                    <div className="form-group mb-4">
                                        {errors.name && errors.name.message ? (
                                            <small className="text-danger">{errors.name && errors.name.message}</small>
                                        ) : <small className="text-muted">Name</small>
                                        }
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control rounded-0 shadow-none"
                                            placeholder="Category name"
                                            ref={register({
                                                required: "Name is required."
                                            })}
                                        />
                                    </div>

                                    <div className="form-group mb-4">
                                        <div className="d-flex">
                                            <div>
                                                <label className="file-upload-box border">
                                                    <div className="flex-center flex-column">
                                                        <Icon icon={camera} size={30} />
                                                        <input type="file" onChange={imageChangeHandeller} />
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="px-2">
                                                {previewURL && selectedFile.size < 50000 ? (
                                                    <img src={previewURL} className="img-fluid border" alt="..." />
                                                ) :
                                                    <img src={testImg} className="img-fluid border" alt="..." />
                                                }
                                                <button type="submit" className="ml-2 btn btn-light border rounded-0 shadow-none">Update</button>
                                            </div>
                                        </div>
                                        {sizeLimit ? (
                                            <p className="text-danger mb-0">Select less than 50KB file.</p>
                                        ) : null}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit;