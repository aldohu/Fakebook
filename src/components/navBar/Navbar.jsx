import './navbar.scss';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
	const { toggle, darkMode } = useContext(DarkModeContext); // Corrected from DarkMode to darkMode
	const { currentUser } = useContext(AuthContext);
	return (
		<div className="navbar">
			<div className="left">
				<Link to="/">
					<span>Fakebook</span>
				</Link>
				<HomeOutlinedIcon />
				{darkMode ? (
					<WbSunnyOutlinedIcon onClick={toggle} />
				) : (
					<Brightness4OutlinedIcon onClick={toggle} />
				)}
				<GridViewOutlinedIcon />
				<div className="search">
					<SearchOutlinedIcon />
					<input
						type="text"
						placeholder="Search"
					/>
				</div>
			</div>
			<div className="right">
				<PersonOutlineOutlinedIcon />
				<EmailOutlinedIcon />
				<NotificationsOutlinedIcon />
				<div className="user">
					<img
						src={currentUser.profilePicture}
						alt=""
					/>
					<span>{currentUser.name}</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
