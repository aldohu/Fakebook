import React from 'react';
import './comments.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
const Comments = () => {
	const { currentUser } = useContext(AuthContext);
	const comments = [
		{
			id: 1,
			desc: 'comment 1',
			name: 'John Doe',
			userId: 1,
			profilePicture:
				'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
		},
		{
			id: 2,
			desc: 'comment 2',
			name: 'Jane Doe',
			userId: 2,
			profilePicture:
				'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
		},
	];
	return (
		<div className="comments">
			<div className="write">
				<img
					src={currentUser.profilePicture}
					alt=""
				/>
				<input
					type="text"
					placeholder="Write a comment"
				/>
				<button>Post</button>
			</div>
			{comments.map((comment) => (
				<div className="comment">
					<img
						src={comment.profilePicture}
						alt=""
					/>
					<div className="info">
						<span>{comment.name}</span>
						<p>{comment.desc}</p>
					</div>
					<span className="date">1 hour ago</span>
				</div>
			))}
		</div>
	);
};

export default Comments;
