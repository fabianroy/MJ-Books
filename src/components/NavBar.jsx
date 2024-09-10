
const NavBar = () => {

    const navList = <>
        <li><a>Home</a></li>
        <li><a>Books</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
    </>

    return (
        <div className="navbar bg-orange-400 md:py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navList}
                    </ul>
                </div>
                <a className="text-xl md:text-3xl font-semibold md:ml-8 border-l-[3px] lg:border-l-4 pl-2 border-black"><span className="text-white">MJ's</span> Books</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    {navList}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;