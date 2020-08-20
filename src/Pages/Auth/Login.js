import React, { useState } from 'react';
import '../../style.scss';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [loading, setLoading] = useState(false);


    const onSubmit = data => {
        setLoading(true);
        localStorage.setItem('token', data.email)
        props.history.push('/admin')
    }


    return (
        <div className="auth">
            <div className="flex-center flex-column">
                <div className="card border-0">
                    <div className="card-header bg-white text-center">
                        <h4 className="mb-0">Login</h4>
                    </div>
                    <div className="card-body">
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

                            {/* Password */}
                            <div className="form-group mb-4">
                                {errors.password && errors.password.message ? (
                                    <small className="text-danger">{errors.password && errors.password.message}</small>
                                ) : <small>Password</small>
                                }
                                <input
                                    type="text"
                                    name="password"
                                    className="form-control shadow-none"
                                    placeholder="Enter password"
                                    ref={register({
                                        minLength: {
                                            value: 8,
                                            message: "Please enter minimum 8 characters",
                                        },
                                        required: "Please enter password",
                                    })}
                                />
                            </div>

                            <div className="d-flex">
                                <div>
                                    <Link to="/reset">Forgot password? Reset</Link>
                                </div>
                                <div className="ml-auto">
                                    <button type="submit" className="btn shadow-none text-white float-right">
                                        {loading ? (
                                            <p className="mb-0">Logging...</p>
                                        ) : <p className="mb-0">Login Account</p>}
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

export default Login;