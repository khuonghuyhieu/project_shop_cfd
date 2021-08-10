import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormValidate from '../../../hook/useFormValidate';
import { registerAction } from '../../../redux/reducer/authReducer';
// import Auth from '../../../service/auth';

function Register() {
	let [cfpass, setCfpass] = useState(false);
	let dispatch = useDispatch();
	let { registerError } = useSelector((store) => store.auth);

	let { form, error, InputChange, check } = useFormValidate(
		{
			fname: '',
			lname: '',
			username: '',
			password: '',
			cfpassword: '',
		},
		{
			rule: {
				fname: {
					required: true,
				},
				lname: {
					required: true,
				},
				username: {
					required: true,
					pattern: 'email',
				},
				password: {
					required: true,
					min: 6,
					max: 32,
					new: true,
				},
				cfpassword: {
					required: true,
					min: 6,
					max: 32,
					confirm: true,
				},
			},
			message: {
				fname: {
					required: 'Họ không được bỏ trống',
				},
				lname: {
					required: 'Tên không được bỏ trống',
				},
				email: {
					required: 'Email không được bỏ trống',
					pattern: 'Email không đúng định dạng',
				},
				password: {
					required: 'Mật khẩu không được bỏ trống',
				},
				cfpassword: {
					required: 'Nhập lại mật khẩu không được bỏ trống',
				},
			},
		}
	);

	function OnSubmit() {
		let errorOjb = check();

		if (Object.keys(errorOjb).length === 0) {
			//redux middle
			const { fname, lname, username, password, cfpassword } = form;
			if (password.trim() === cfpassword.trim()) {
				dispatch(registerAction({ username, password, fname, lname }));
				setCfpass(false);
			} else {
				setCfpass(true);
			}
			//reduxToolkit
		}
	}

	return (
		<div className="col-12 col-md-6">
			{/* Card */}
			<div className="card card-lg">
				<div className="card-body">
					{/* Heading */}
					<h6 className="mb-7">New Customer</h6>
					{/* Form */}
					<form>
						<div className="row">
							<div className="col-12">
								{/* Email */}
								<div className="form-group">
									<label className="sr-only" htmlFor="registerFirstName">
										First Name *
									</label>
									<input
										name="fname"
										value={form.fname}
										onChange={InputChange}
										className="form-control form-control-sm"
										id="registerFirstName"
										type="text"
										placeholder="First Name *"
									/>
									{error.fname && <p className="error_text">{error.fname}</p>}
								</div>
							</div>
							<div className="col-12">
								{/* Email */}
								<div className="form-group">
									<label className="sr-only" htmlFor="registerLastName">
										Last Name *
									</label>
									<input
										name="lname"
										value={form.lname}
										onChange={InputChange}
										className="form-control form-control-sm"
										id="registerLastName"
										type="text"
										placeholder="Last Name *"
									/>
									{error.lname && <p className="error_text">{error.lname}</p>}
								</div>
							</div>
							<div className="col-12">
								{/* Email */}
								<div className="form-group">
									<label className="sr-only" htmlFor="registerEmail">
										Email Address *
									</label>
									<input
										name="username"
										value={form.username}
										onChange={InputChange}
										className="form-control form-control-sm"
										id="registerEmail"
										type="email"
										placeholder="Email Address *"
									/>
									{error.username && <p className="error_text">{error.username}</p>}
									{registerError && <p className="error_text">{registerError}</p>}
								</div>
							</div>
							<div className="col-12 col-md-6">
								{/* Password */}
								<div className="form-group">
									<label className="sr-only" htmlFor="registerPassword">
										Password *
									</label>
									<input
										name="password"
										value={form.password}
										onChange={InputChange}
										className="form-control form-control-sm"
										id="registerPassword"
										type="password"
										placeholder="Password *"
									/>
									{error.password && <p className="error_text">{error.password}</p>}
								</div>
							</div>
							<div className="col-12 col-md-6">
								{/* Password */}
								<div className="form-group">
									<label className="sr-only" htmlFor="registerPasswordConfirm">
										Confirm Password *
									</label>
									<input
										name="cfpassword"
										value={form.cfpassword}
										onChange={InputChange}
										className="form-control form-control-sm"
										id="registerPasswordConfirm"
										type="password"
										placeholder="Confrm Password *"
									/>
									{error.cfpassword && <p className="error_text">{error.cfpassword}</p>}
									{cfpass && <p className="error_text">Xác nhận lại mật khẩu sai</p>}
								</div>
							</div>
							<div className="col-12 col-md-auto">
								{/* Link */}
								<div className="form-group font-size-sm text-muted">
									By registering your details, you agree with our Terms &amp; Conditions, and
									Privacy and Cookie Policy.
								</div>
							</div>
							<div className="col-12 col-md">
								{/* Newsletter */}
								<div className="form-group">
									<div className="custom-control custom-checkbox">
										<input
											className="custom-control-input"
											id="registerNewsletter"
											type="checkbox"
										/>
										<label className="custom-control-label" htmlFor="registerNewsletter">
											Sign me up for the Newsletter!
										</label>
									</div>
								</div>
							</div>
							<div className="col-12" onClick={OnSubmit}>
								{/* Button */}
								<div className="btn btn-sm btn-dark">Register</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Register;
