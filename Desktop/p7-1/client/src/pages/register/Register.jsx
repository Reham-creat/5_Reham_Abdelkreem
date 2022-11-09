
import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
    <div className="card">
      <div className= "left">
        <h1>Groupomania</h1>
            <p>Groupomania focuses on the creation of a modern
               and fun internal social network, that will allow
                employees toget to know each other in a more informal setting.</p>
                <span>Do you have an account?</span>

            <Link to="/login">
            <button>Login</button>
          </Link>

      </div>
      <div className="right">
        <h1>Login</h1>
        <form>
          <input type= "text" placeholder="Username"></input>
          <input type= "email" placeholder="Email"></input>
          <input type="text" pkaceholder="Name"></input>
          <input type="password" pkaceholder="Password"></input>
          <button>Register</button>
        </form>

      </div>
    </div>
   </div>
  );
}
  
  export default Register;