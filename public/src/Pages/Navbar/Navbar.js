import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const {user,logOut,loading } = useContext(AuthContext)
    const navigate = useNavigate()

    const handelsignOut =()=>{
       logOut()
       .then(()=>{
           
            navigate('/');
            loading(true)
       })
       .catch(err=>console.log(err))
    }
    const menuItems = <>
       <li><Link to='/'>Home</Link></li>
       <li><Link to='/'>Advertised items</Link></li>
       <li><Link to='/blog'>Blog</Link></li>
       {user?.email? 
        <>
         <li><Link to='/dashboard'>Dashboard</Link></li>
         <li><Link to='/signout' onClick={handelsignOut}>Sign Out</Link></li>
        </>
       :<li><Link to='/login'>login</Link></li>}
    
    </>
    return (
        <div className="navbar  bg-amber-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact font-bold justify-end dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl font-bold">Car Market</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal justify-end font-bold ">
                   {menuItems}
                </ul>

            </div>
            <label htmlFor="dashboardDrawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
             </label>
           
        </div>
    );
};

export default Navbar;