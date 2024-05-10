import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";
import { useAddLoginMutation } from "../../redux/services/loginServices";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/authSlices";

export const Login = () => {
  const [addLogin] = useAddLoginMutation();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  console.log(token);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await addLogin(data);
      reset({ username: "", password: "" });
      dispatch(setUser(res.data.token));
      navigate("/admin");

      console.log(res.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="login-top">
        <div className="container">
          <div className="d-flex justify-content-center py-2 gap-2">
            <Link to="/">Home</Link>
            <p>/</p>
            <p>Login</p>
          </div>
        </div>
      </div>
      <div className="login-body">
        <div className="container">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column align-items-center "
          >
            <div className="form-group">
              <label className="login-label" htmlFor="userName">
                UserName
              </label>
              <input
                id="userName"
                value={"mor_2314"}
                type="text"
                className="login-input"
                {...register("username", { required: true })}
              />
              {errors.userName && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group">
              <label className="login-label" htmlFor="password">
                Password
              </label>
              <input
                value={"83r5^_"}
                id="password"
                type="password"
                className="login-input"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
