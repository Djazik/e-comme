import React, { memo, useState } from "react";
import { useNavigate, NavLink,  } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.svg";
import axios from "axios";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { API_URL } from "../../static";
import "./Login.css"
// import { usePostSignInMutation } from "../../context/api/usersApi";

export const Login = () => {
  // let [signUp, {data, isLoading,isSuccess,isError}] = usePostSignInMutation()
  // if(isSuccess){
  //   localStorage.setItem("token", data.token)
  //   Navigate("/admin")
  //   toast.success("Welcome");
  // }

  // if(isError){
  //   toast.error("Username or Password is incorrect");
  // }

  // const handleSignUp = (e)=>{
  //   signUp({username:"afs",password:"31"})
  // }










  const [ShowPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!username.trim() || !password.trim()) {
      return toast.warn("Malumotni to'liq kiriting");
    }
    let user = { username, password };
    axios
      .post(`${API_URL}/auth/login`, user)
      .then((res) => {
        console.log("response >>>", res);
        toast.success("Welcome");
        localStorage.setItem("token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log("error >>>", err);
        toast.error("Username or Password is incorrect");
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="container">
      <div className="login__border">
        <div className="login">
          <NavLink to={"/"}>
            <img src={logo} alt="" />
          </NavLink>
          <form className="container" onSubmit={handleSubmit}>
            <h2 className="login__title">Email Address*</h2>
            <div className="inp__border">
              <input
                className="login__inp"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
              />
            </div>
            <h2 className="login__title">Password*</h2>
            <div className="inp__border">
              <input
                className="login__inp"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={ShowPassword ? "text" : "password"}
              />
              {password && (
                <button
                  className="see__btn"
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                >
                  {ShowPassword ? <FaEyeSlash /> : <FaRegEye />}
                </button>
              )}
            </div>
            <div className="remeber">
              <div className="checkbox">
                <input type="checkbox" />
                <h2 className="chackbox__title">Remember Me</h2>
              </div>
              <h2 className="chackbox__title">Forgot Password?</h2>
            </div>
            <div className="sing">
              <button className="login__btn" disabled={loading}>
                {loading ? "Loading..." : "Login"}
              </button>
              <h2 className="chackbox__title">SignUp? </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(Login);
