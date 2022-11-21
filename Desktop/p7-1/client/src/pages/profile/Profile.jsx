import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram"; 
import TwitterIcon from "@mui/icons-material/Twitter";
import Posts from "../../components/posts/Posts"


const Profile = () => {
    return (

        <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon />
            </a>
           
            <a href="http://tweeter.com">
              <TwitterIcon/>
            </a>
          </div>
          <div className="center">
            <button>Delete account</button>
          </div>
          <div className="right">
             <a href="http://instagram.com">
              <InstagramIcon />
            </a>
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
