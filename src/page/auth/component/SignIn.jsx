import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormValidate from '../../../hook/useFormValidate';
import { loginAction } from '../../../redux/reducer/authReducer';

function SignIn() {
	let { form, error, InputChange, check } = useFormValidate(
		{
			username: '',
			password: '',
		},
		{
			rule: {
				username: {
					required: true,
					pattern: 'email',
				},
				password: {
					required: true,
					min: 6,
					max: 32,
				},
			},
			message: {
				username: {
					required: 'Tên tài khoản không được bỏ trống',
					pattern: 'Email không đúng định dạng',
				},
				password: {
					required: 'Mật khẩu không được bỏ trống',
				},
			},
		}
	);

	let dispatch = useDispatch();

	let { loginError } = useSelector((store) => store.auth);

	function OnSubmit() {
		let errorOjb = check();

		if (Object.keys(errorOjb).length === 0) {
			dispatch(loginAction(form));
		}
	}

	return (
		<div className="col-12 col-md-6">
			{/* Card */}
			<div className="card card-lg mb-10 mb-md-0">
				<div className="card-body">
					{/* Heading */}
					<h6 className="mb-7">Returning Customer</h6>
					{/* Form */}
					<form>
						<div className="row">
							<div className="col-12">
								{/* Email */}
								<div className="form-group">
									<label className="sr-only" htmlFor="loginEmail">
										Email Address *
									</label>
									<input
										className="form-control form-control-sm"
										id="loginEmail"
										// type="email"
										placeholder="Email Address *"
										name="username"
										value={form.username}
										onChange={InputChange}
									/>
									{error.username && <p className="error_text">{error.username}</p>}
								</div>
							</div>
							<div className="col-12">
								{/* Password */}
								<div className="form-group">
									<label className="sr-only" htmlFor="loginPassword">
										Password *
									</label>
									<input
										name="password"
										value={form.password}
										className="form-control form-control-sm"
										id="loginPassword"
										type="password"
										placeholder="Password *"
										onChange={InputChange}
									/>
									{error.password && <p className="error_text">{error.password}</p>}
								</div>
							</div>
							<div className="col-12 col-md">
								{/* Remember */}
								<div className="form-group">
									<div className="custom-control custom-checkbox">
										<input className="custom-control-input" id="loginRemember" type="checkbox" />
										<label className="custom-control-label" htmlFor="loginRemember">
											Remember me
										</label>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-auto">
								{/* Link */}
								<div className="form-group">
									q
									<a
										className="font-size-sm text-reset"
										data-toggle="modal"
										href="#modalPasswordReset"
									>
										Forgot Password?
									</a>
								</div>
							</div>
							{loginError && <p className="error_text">{loginError}</p>}
							<div className="col-12" onClick={OnSubmit}>
								{/* Button */}
								<div className="btn btn-sm btn-dark">Sign In</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
