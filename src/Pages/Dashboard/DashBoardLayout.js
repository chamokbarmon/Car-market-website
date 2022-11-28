import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "./../../Context/AuthProvider";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log("my admin ",isAdmin)
  useEffect(() => {
    fetch(" https://used-product-market-server.vercel.app/allAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email:user.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return(
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My orders</Link>
            </li>
            {isAdmin && (
              <li>
                <Link to="/dashboard/seller">All sellers</Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link to="/dashboard/product">Add a Product</Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link to="/dashboard/myProduct">My Product</Link>
              </li>
            )}
          
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;










