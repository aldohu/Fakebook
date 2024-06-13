import { Link } from 'react-router-dom';
import './login.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Login = () => {
	const { login } = useContext(AuthContext);

	const handleLogin = (e) => {
		login();
	};
	return (
		<div className="login">
			<div className="card">
				<div className="left">
					<h1>Hello World</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<span>Do you have an account?</span>
					<Link to="/register">
						<button>Register</button>
					</Link>
				</div>
				<div className="right">
					<h1>Login</h1>
					<form>
						<input
							type="text"
							name="username"
							placeholder="Enter your username"
						/>
						<input
							type="password"
							name="password"
							placeholder="Enter your password"
						/>
						<button onClick={handleLogin}>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
