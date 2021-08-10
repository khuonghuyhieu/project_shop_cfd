import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Register from './component/Register';
import SignIn from './component/SignIn';

function AuthSignAndRegister() {
	let { login } = useSelector((store) => store.auth);

	if (login) {
		return <Redirect to="/" />;
	}

	return (
		<>
			<section className="py-12">
				<div className="container">
					<div className="row">
						<SignIn />
						<Register />
					</div>
				</div>
			</section>
		</>
	);
}

export default AuthSignAndRegister;
