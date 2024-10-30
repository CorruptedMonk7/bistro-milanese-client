
import { FaBook, FaBookOpen, FaCalendar, FaEnvelope, FaHome, FaList, FaListOl, FaSearch, FaShoppingCart, FaStar, FaUser, FaUtensils, FaVoicemail } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import { FaBookBible } from 'react-icons/fa6';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className='menu'>
                    {
                        isAdmin ?
                            <>
                                <li>

                                    <NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/manageItems"><FaListOl></FaListOl> Manage Items </NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils>Add Items</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/bookings"><FaBookOpen></FaBookOpen> Manage Bookings</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/users"><FaUser></FaUser> All Users</NavLink>
                                </li></>
                            :
                            <>
                                <li>

                                    <NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>{cart.length} item in cart </NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/bookings"><FaCalendar></FaCalendar>Bookings</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/review"><FaStar></FaStar>Review</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/paymentHistory"><FaList></FaList>Payment History</NavLink>
                                </li></>
                    }
                    <div className='divider'></div>
                    <li>

                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>

                        <NavLink to="/order/salad"><FaBook></FaBook> Menu</NavLink>
                    </li>
                    <li>

                        <NavLink to="/order/contact"><FaEnvelope></FaEnvelope> Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet>

                </Outlet>
            </div>
        </div>
    );
};

export default Dashboard;