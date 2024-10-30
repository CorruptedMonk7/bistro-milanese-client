import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowCircleRight';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin()

    const [cart] = useCart()


    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar fixed z-10 text-white bg-opacity-30 bg-black">
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
                            <li><Link to="/">Home</Link></li>
                            <li>
                                <Link to="/menu">Menu</Link>
                            </li>
                            <li><Link to="/order/salad">Order</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Milanese</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='mt-2'><Link to="/">Home</Link></li>
                        <li className='mt-2'>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li className='mt-2'><Link to="/order/salad">Order</Link></li>
                        {
                            user && isAdmin && <li className='mt-2'><Link to="/dashboard/adminHome">Dashboard</Link></li>
                        }
                        {
                            user && !isAdmin && <li className='mt-2'> <Link to="/dashboard/userHome">Dashboard</Link></li>
                        }
                        <li>
                            <Link to="/dashboard/cart">
                                <button className="btn ">
                                    <FaShoppingCart className='mr-2'></FaShoppingCart>
                                    <div className="badge">+{cart.length}</div>
                                </button>
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            {/* <span>{user?.displayName}</span> */}

                            <button onClick={handleLogout} className='btn btn-ghost'>Log Out</button>
                        </> :
                            <>
                                <Link to="/login">Sign In <FontAwesomeIcon icon={faArrowCircleRight} /> </Link>
                            </>
                    }

                </div>
            </div>
        </div >
    );
};

export default Navbar;