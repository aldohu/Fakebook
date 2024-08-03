import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from '../../components/posts/Posts';

const Profile = () => {
	return (
		<div className="profile">
			<div className="images">
				<img
					className="cover"
					src=""
					alt="" // Added alt attribute
				/>
				<img
					className="profilePic"
					src=""
					alt="" // Added alt attribute
				/>
			</div>
			<div className="profileContainer">
				<div className="uInfo">
					<div className="left">
						<a href="http://facebook.com">
							<FacebookTwoToneIcon fontSize="large" />
						</a>
						<a href="XXXXXXXXXXXXXXXXXXX">
							<LinkedInIcon fontSize="large" />
						</a>
						<a href="XXXXXXXXXXXXXXXXXXXX">
							<InstagramIcon fontSize="large" />
						</a>
						<a href="XXXXXXXXXXXXXXXXXXXX">
							<PinterestIcon fontSize="large" />
						</a>
						<a href="XXXXXXXXXXXXXXXXXX">
							<TwitterIcon fontSize="large" />
						</a>
					</div>
					<div className="center">
						<span>John Doe</span>
						<div className="info">
							<div className="item">
								<PlaceIcon />
								<span>New York</span>
							</div>
							<div className="item">
								<LanguageIcon />
								<span>English</span>
							</div>
						</div>
						<button>Follow</button>
					</div>
					<div className="right">
						<EmailOutlinedIcon />
						<MoreVertIcon />
					</div>
				</div>
				<Posts />
			</div>
		</div>
	);
};

export default Profile;
