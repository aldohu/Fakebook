import './App.css';
import './style.scss';
import {
	createBrowserRouter,
	Route,
	RouterProvider,
	Navigate,
	Outlet,
} from 'react-router-dom';
import Navbar from './components/navBar/Navbar';
import Leftbar from './components/leftBar/Leftbar';
import Rightbar from './components/rightBar/Rightbar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {
	const { currentUser } = useContext(AuthContext);
	const { darkMode } = useContext(DarkModeContext);

	const Layout = () => {
		return (
			<div className={`theme-${darkMode ? 'dark' : 'light'}`}>
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
				{ path: '/', element: <Home /> },
				{ path: '/profile/:id', element: <Profile /> },
			],
		},
		{ path: '/login', element: <Login /> },
		{ path: '/register', element: <Register /> },
	]);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
