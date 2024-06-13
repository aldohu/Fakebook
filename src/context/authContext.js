import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null,
	);

	const login = () => {
		setCurrentUser({
			id: 1,
			name: 'John Doe',
			profilePicture:
				'https://images.pexels.com/photos/1822608/pexels-photo-1822608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
		});
	};

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, login }}>
			{children}
		</AuthContext.Provider>
	);
};
