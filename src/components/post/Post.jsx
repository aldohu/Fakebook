import React from 'react';
import { useState } from 'react';
import Comments from '../comments/Comments.jsx';
import { Link } from 'react-router-dom';
import './post.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
	Favorite,
	FavoriteBorderOutlined,
	FavoriteOutlined,
	ShareOutlined,
	TextsmsOutlined,
} from '@mui/icons-material';
const Post = ({ post }) => {
	const [commentOpen, setCommentOpen] = useState(false);
	const liked = false;
	return (
		<div className="post">
			<div className="container">
				<div className="user">
					<div className="userInfo">
						<img
							src={post.img}
							alt=""
						/>
						<div className="details">
							<Link
								to={`/profile/${post.userId}`}
								style={{ textDecoration: 'none', color: 'inherit' }}
							>
								<span>{post.name}</span>
							</Link>
							<span className="date">1 min ago</span>
						</div>
					</div>
					<MoreHorizonIcon />
				</div>
				<div className="content">
					<p>{post.desc}</p>
					<img
						src={post.img}
						alt=""
					/>
				</div>
				<div className="info">
					<div
						className="item"
						onClick={() => {
							setCommentOpen(!commentOpen);
						}}
					>
						{liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}

						{post.likes}
					</div>
					<div className="item">
						<TextsmsOutlined />
						{post.comments}
					</div>
					<div className="item">
						<ShareOutlined />

						{post.shares}
					</div>
				</div>
				{commentOpen && <Comments />}
			</div>
		</div>
	);
};

export default Post;
