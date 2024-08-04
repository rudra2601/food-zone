import React from "react";
import './Sidebar.css';
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return <div className="sidebar">
    <div className="sidebar-options">
    <NavLink to='/Users' className="sidebar-option">
            <img src={assets.user_icon} alt="" />
            <p>Users</p>
        </NavLink>
        <NavLink to='/add' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
            <img src={assets.list} alt="" />
            <p>List Items</p>
        </NavLink>
        <NavLink to='orders' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>Orders</p>
        </NavLink>
        <NavLink to='Feedback' className="sidebar-option">
            <img src={assets.Feedback} alt="" />
            <p>Feedback</p>
        </NavLink>
    </div>
  </div>;
}

export default Sidebar;
