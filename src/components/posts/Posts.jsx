import Post from '../post/Post';
import './posts.scss';
import React from 'react';

const Posts = () => {
	const posts = [
		{
			id: 1,
			name: 'John Doe',
			profilePicture:
				'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600',
			desc: 'This is a post , lorem ipsum bla bla',
			img: 'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600',
		},
		{
			id: 2,
			name: 'Jane Doe',
			profilePicture:
				'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600',
			desc: 'This is a post , lorem ipsum bla bla',
		},
	];

	return (
		<div className="posts">
			{posts.map((post) => {
				return (
					<Post
						post={post}
						key={post.id}
					/>
				);
			})}
		</div>
	);
};

export default Posts;
