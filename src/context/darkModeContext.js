import { createContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem('darkMode')) || false,
	);

	const toggle = () => {
		setDarkMode((prevMode) => !prevMode);
	};

	useEffect(() => {
		localStorage.setItem('darkMode', JSON.stringify(darkMode));
		console.log('Dark mode changed:', darkMode); // For debugging
	}, [darkMode]);

	return (
		<DarkModeContext.Provider value={{ darkMode, toggle }}>
			{children}
		</DarkModeContext.Provider>
	);
};
