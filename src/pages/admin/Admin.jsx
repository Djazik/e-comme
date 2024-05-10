import { Link } from "react-router-dom";
import "./Admin.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/slices/authSlices";
export const Admin = () => {
  const dispatch = useDispatch();
  return (
    <div className="admin">
      <div className="admin-top">
        <div className="container">
          <div className="d-flex justify-content-center py-2 gap-2">
            <Link to="/">Home</Link>
            <p>/</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
      <div className="admin-body">
        <div className="container">
          <div className="d-flex flex-column admin-content">
            <h1 className="admin-title">Admin panel</h1>
            <p className="admin-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur cupiditate inventore, deserunt magnam provident
              dolores blanditiis ullam iusto! Assumenda dolor quis itaque
              commodi tempore laudantium quam deleniti id consequatur. Minus
              delectus officia unde quam nulla ut. Odit quibusdam quis aut enim
              delectus blanditiis, quisquam quidem maiores suscipit.
              Dignissimos, ut repudiandae!
            </p>
            <p className="admin-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur cupiditate inventore, deserunt magnam provident
              dolores blanditiis ullam iusto! Assumenda dolor quis itaque
              commodi tempore laudantium quam deleniti id consequatur. Minus
              delectus officia unde quam nulla ut. Odit quibusdam quis aut enim
              delectus blanditiis, quisquam quidem maiores suscipit.
              Dignissimos, ut repudiandae!
            </p>
            <p className="admin-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur cupiditate inventore, deserunt magnam provident
              dolores blanditiis ullam iusto! Assumenda dolor quis itaque
              commodi tempore laudantium quam deleniti id consequatur. Minus
              delectus officia unde quam nulla ut. Odit quibusdam quis aut enim
              delectus blanditiis, quisquam quidem maiores suscipit.
              Dignissimos, ut repudiandae!
            </p>
            <button
              onClick={() => dispatch(logoutUser())}
              className="admin-btn"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
