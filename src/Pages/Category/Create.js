import React, { useState } from 'react';
import '../../style.scss';
import { Icon } from 'react-icons-kit';
import { Link } from 'react-router-dom';
import { ic_keyboard_arrow_left } from 'react-icons-kit/md';
import { camera } from 'react-icons-kit/icomoon/camera';
import { useForm } from 'react-hook-form';


const Create = () => {
    const { register, handleSubmit, errors } = useForm()
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewURL, setPreviewURL] = useState(null)


    // Image onChange
    const imageChangeHandeller = event => {
        let file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreviewURL(URL.createObjectURL(event.target.files[0]))
        }
    }

    const submitCategory = data => {
        let formData = new FormData()
        formData.append('name', data.name)
        formData.append('image', selectedFile)
    }


    return (
        <div className="create">
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
                                            {selectedFile && selectedFile.size > 50000 ? (
                                                <div className="px-2">
                                                    <p className="text-danger mb-0">Select less than 50KB file.</p>
                                                </div>
                                            ) : selectedFile && selectedFile.size < 50000 && previewURL ? (
                                                <div className="px-2">
                                                    <img src={previewURL} className="img-fluid border" alt="..." />
                                                    <button type="submit" className="ml-2 btn btn-light border rounded-0 shadow-none">Submit</button>
                                                </div>
                                            ) : null}
                                        </div>
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

export default Create;