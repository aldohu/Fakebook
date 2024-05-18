import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import {
	createBrowserRouter,
	Route,
	RouterProvider,
	Link,
	Navigate,
	Outlet, // Corrected: Changed Redirect to Navigate
} from 'react-router-dom';
import Navbar from './components/navBar/Navbar';
import Leftbar from './components/leftBar/Leftbar';
import Rightbar from './components/rightBar/Rightbar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';

function App() {
	const currentUser = true;

	const Layout = () => {
		return (
			<div>
				<Navbar />
				<div style={{ display: 'flex' }}>
					<Leftbar />
					<div style={{ flex: 6 }}>
						<Outlet />
					</div>
					<Rightbar />
				</div>
			</div>
		);
	};

	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to="/login" />;
		}
		return children;
	};

	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>
			),
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/profile/:id',
					element: <Profile />,
				},
			],
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/register',
			element: <Register />,
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
