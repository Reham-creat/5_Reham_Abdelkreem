import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
import moment from "moment";






const Post = ({post}) => {

  const [commentOpen, setCommentOpen] = useState (false)
  //Temporary
const liked= false;

    return (
      <div className="post">
        <div className="container">
       <div className="user">
        <div className="userInfo">
          <img src={ post.profilePic} alt=""/>
           <div className="details">
            <Link  className="link" to={`/profile/${post.userId}`}>
              <span className="name">{post.name}</span>
              </Link>
              <span className="date">({moment (post.createdAt).fromNow()})</span>
            
          </div>
        </div>
        <MoreHorizIcon/>
       </div>
       <div className=" content">
        <p>{post.desc}</p>
        <img src={"/upload/" + post.img} alt="" />
       </div>
       <div className="info">
        <div className="item">
          { liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon />}
          12 likes
        
        </div>
        <div className="item" onClick = { ()=> setCommentOpen(!commentOpen)}>
          <TextsmsOutlinedIcon/>
          10 Comments
        </div>
        <div className="item">
          <ShareOutlinedIcon />
          8 Share
        </div>
       </div>
        { commentOpen && <Comments postId={post.id}/>}
      </div>
      </div>

    )
  }
  
  export default Post;