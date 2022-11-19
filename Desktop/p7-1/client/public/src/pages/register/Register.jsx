import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios"

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4200/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(err)




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
        <h1>Register</h1>
        <form>
          <input type= "text" placeholder="Username"  name = "username" onChange= {handleChange}></input>
          <input type= "email" placeholder="Email" name = "email" onChange= {handleChange}></input>
          <input type="text" pkaceholder="Name" name = "name" onChange= {handleChange}></input>
          <input type="password" pkaceholder="Password" name = "password" onChange= {handleChange}></input>
          {err && err}
          <button onClick = {handleClick}>Register</button>
        </form>

      </div>
    </div>
   </div>
  );
}
  
  export default Register;