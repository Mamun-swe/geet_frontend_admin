import React, { useState } from 'react';
import '../../style.scss';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Reset = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loading, setLoading] = useState(false);


    const onSubmit = data => {
        setLoading(true);
        console.log(data);
    }

    return (
        <div className="auth">
            <div className="flex-center flex-column">
                <div className="card border-0">
                    <div className="card-header bg-white text-center">
                        <h4 className="mb-0">Reset Password</h4>
                    </div>
                    <div className="card-body">
                        <p className="mb-3">Just enter your e-mail, we will send a new password to your account</p>


                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Email */}
                            <div className="form-group mb-4">
                                {errors.email && errors.email.message ? (
                                    <small className="text-danger">{errors.email && errors.email.message}</small>
                                ) : <small>E-mail</small>
                                }
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control shadow-none"
                                    placeholder="Enter e-mail"
                                    ref={register({
                                        required: "E-mail is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                            </div>

                            <div className="d-flex">
                                <div>
                                    <Link to="/">Go to Login</Link>
                                </div>
                                <div className="ml-auto">
                                    <button type="submit" className="btn shadow-none text-white float-right">
                                        {loading ? (
                                            <p className="mb-0">Please Wait...</p>
                                        ) : <p className="mb-0">Submit</p>}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reset;