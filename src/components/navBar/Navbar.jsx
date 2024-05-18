import './navbar.scss';
import { Link } from 'react-router-dom';
import React from 'react';
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

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="left">
				<Link to="/">
					<span>Fakebook</span>
				</Link>
				<HomeOutlinedIcon />
				<Brightness4OutlinedIcon />
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
						src="https://images.pexels.com/photos/1822608/pexels-photo-1822608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
					/>
					<span>John Doe</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
