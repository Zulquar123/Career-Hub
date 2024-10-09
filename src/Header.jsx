import { NavLink } from "react-router-dom";

export default function Header() {
  const style = (e) => {
    return {
      color: e.isActive ? "#9873FF" : "",
    };
  };
  return (
    <div className="bg-white  ">
      <div className="mx-60 flex justify-between p-5 items-center">
        <div>
          <NavLink to="/" className="manrope font-bold text-3xl text-black">
            Career Hub
          </NavLink>
        </div>

        <nav className="flex gap-6 text-2xl text-[#757575]">
          <NavLink to="/statistic" style={style}>
            Statistic
          </NavLink>
          <NavLink to="/applied-job" style={style}>
            Applied Jobs
          </NavLink>
          <NavLink to="/blog" style={style}>
            Blog
          </NavLink>
        </nav>

        <div>
          <NavLink
            className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-white
            text-xl rounded"
          >
            Start Applying
          </NavLink>
        </div>
      </div>
    </div>
  );
}
