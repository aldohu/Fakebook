import React from 'react';
import './stories.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Stories = () => {
	const { currentUser } = useContext(AuthContext);

	{
		/*temp data*/

		const stories = [
			{
				id: 1,
				name: 'John Doe',
				img: 'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600',
			},
			{
				id: 2,
				name: 'John Doe',
				img: 'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600',
			},
			{
				id: 3,
				name: 'John Doe',
				img: 'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600',
			},
			{
				id: 4,
				name: 'John Doe',
				img: 'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600',
			},
			{
				id: 5,
				name: 'John Doe',
				img: 'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600',
			},
		];
		return (
			<div className="stories">
				<div className="story">
					<img
						src={currentUser.profilePicture}
						alt=""
					/>
					<span>{currentUser.username}</span>
				</div>
				{stories.map((story) => {
					return (
						<div
							className="story"
							key={story.id}
						>
							<img
								src={story.img}
								alt=""
							/>
							<span>{story.name}</span>
						</div>
					);
				})}
			</div>
		);
	}
};
export default Stories;
