import React from 'react'
import { FaTh, FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
function Sidebar({ children }) {
  const symbol = '>'
  const menuItems = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/product',
      name: 'Product',
      icon: <FaTh />,
    },
    {
      path: '/customers',
      name: 'Customers',
      icon: <FaTh />,
    },
    {
      path: '/income',
      name: 'Income',
      icon: <FaTh />,
    },
    {
      path: '/promote',
      name: 'Promote',
      icon: <FaTh />,
    },
    {
      path: '/help',
      name: 'Help',
      icon: <FaTh />,
    },
  ]
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top-section">
          <div className="bars">
            <FaBars />
          </div>
          <h1 className="logo">Dashboard</h1>
        </div>
        {menuItems.map((items, index) => (
          <NavLink
            to={items.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="same">
              <div className="icon">{items.icon}</div>
              <div className="link_text">{items.name}</div>
              <div className="symbol">{symbol}</div>
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
