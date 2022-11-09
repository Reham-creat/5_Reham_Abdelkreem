import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import "./login.scss"

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };
  
  return (
      <div className="login">
      <div className="card">
        <div className= "left">
          <h1>Groupomania</h1>
          <p>Our company, a multinational retail corporation,
             is expanding by the day. We've grown by 100% over the
             last three years,
              and we now employ over 600 people.</p>
              <p>Groupomania focuses on the creation of a modern
                 and fun internal social network, that will allow
                  employees toget to know each other in a more informal setting.</p>
                  <span>Don't you have an account?</span>
           <Link to="/register">
          <button>Register</button>
          </Link>

        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type= "text" placeholder="Username"></input>
            <input type="password" pkaceholder="Password"></input>
            <button onClick={handleLogin}>Login</button>
          </form>

        </div>
      </div>
     </div>
    );
  }
  
  export default Login;