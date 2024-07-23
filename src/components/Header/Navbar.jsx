import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import { useAuthContext } from '../../context/AuthContext';
import LogoutButton from '../Buttons/LogoutButton';

const Navbar = () => {
  const { authUser } = useAuthContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const renderLinks = () => {
    if (authUser?.Role === 'Supervisor') {
      return (
        <>
          <li>
            <NavLink
              to="/employee"
              activeClassName="active-nav-link"
              className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Employee Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Assigned Task"
              activeClassName="active-nav-link"
              className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Assign Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/taskstatus"
              activeClassName="active-nav-link"
              className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Task Status
            </NavLink>
          </li>
        </>
      );
    }

    return (
      <>
        <li>
          <NavLink
            to="/tasks"
            activeClassName="active-nav-link"
            className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/requirement"
            activeClassName="active-nav-link"
            className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Requirement
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rating"
            activeClassName="active-nav-link"
            className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Rating
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/upload"
            activeClassName="active-nav-link"
            className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Upload Status
          </NavLink>
        </li>
      </>
    );
  };

  return (
    <nav className="bg-indigo-500 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Cleaner Staff PRO
          </span>
        </NavLink>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Desktop View */}
          <ul className="hidden md:flex items-center space-x-3">
            {renderLinks()}
            {authUser ? (
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <h2 className="text-gray-900 bg-white dark:text-white">{authUser.FirstName}</h2>
                <NavLink to="/profile">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={authUser.Gender === 'male'
                      ? `https://avatar.iran.liara.run/public/boy?username=${authUser.UserName}`
                      : `https://avatar.iran.liara.run/public/girl?username=${authUser.UserName}`
                    }
                    alt="user photo"
                  />
                </NavLink>
                <LogoutButton />
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
          {/* Mobile View */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={mobileMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu Content */}
        <div
          className={`${
            mobileMenuOpen ? 'block' : 'hidden'
          } md:hidden md:items-center w-full md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
            {renderLinks()}
            <li>
              {authUser ? (
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <h2 className="text-gray-900 dark:text-white">{authUser.FirstName}</h2>
                  <NavLink to="/profile">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={authUser.Gender === 'male'
                        ? `https://avatar.iran.liara.run/public/boy?username=${authUser.UserName}`
                        : `https://avatar.iran.liara.run/public/girl?username=${authUser.UserName}`
                      }
                      alt="user photo"
                    />
                  </NavLink>
                  <LogoutButton />
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
