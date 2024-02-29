export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-xl shadow-neutral">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-slate-600 text-base font-medium">Home</a>
              </li>

              <li className="text-slate-600 text-base font-medium">
                <a>Support</a>
              </li>
            </ul>
          </div>
          <a
            href="http://localhost:5173/"
            className="btn btn-ghost text-2xl text-slate-600 font-bold"
          >
            The Blog Spot
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-slate-600 text-base font-medium">
              <a href="http://localhost:5173/">Home</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-ghost text-slate-600 text-base font-medium mr-2">
            Login
          </a>
          <a className="btn btn-neutral text-white text-base font-medium mr-2">
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
}
