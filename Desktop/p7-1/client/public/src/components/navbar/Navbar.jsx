import "./navbar.scss";

import HomeIcon from '@mui/icons-material/Home';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

import { Link } from "react-router-dom";


const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Groupomania</span>
          </Link>
          <HomeIcon/>
          <DarkModeOutlinedIcon/>
          <GridViewOutlinedIcon/>
          <div className="search">
            <SearchIcon/>
            <input type="text" placeholder="Search..."></input>
             </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
        <img
            src={currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
