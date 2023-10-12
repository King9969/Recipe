import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../pages/firebase"; // Import the auth object from your firebase.js file

export default function App() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // User state
  const [showLogout, setShowLogout] = useState(false); // State to toggle logout button

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" to="/">
          <img
            className="h-10"
            src="https://cdn3.iconfinder.com/data/icons/living/24/249_eat_restaurant_dinner-512.png"
            alt="Logo"
          />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-white font-bold transition rounded p-3 hover:bg-blue-600"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                {user ? (
                  <Link
                    className="text-white font-bold transition rounded p-3 hover:bg-blue-600"
                    to="/profile"
                  >
                    Profile
                  </Link>
                ) : (
                  <div></div>
                )}
              </li>
              <li>
                {user ? (
                  <Link
                    className="text-white font-bold transition rounded p-3 hover:bg-blue-600"
                    to="/help"
                  >
                    My Recipes's{" "}
                  </Link>
                ) : (
                  <div></div>
                )}
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative">
                <Link
                  onClick={() => setShowLogout(!showLogout)}
                  className="font-bold block rounded bg-gray-100 px-5 py-2.5 text-sm text-teal-600 transition hover:text-blue-600 dark:bg-gray-900 dark:text-white dark:hover:bg-white"
                >
                  {user.email}
                </Link>

                {showLogout && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg">
                    <div className="rounded-md bg-red-500 ring-1 ring-black ring-opacity-5">
                      <button
                        onClick={() => {
                          auth.signOut();
                          setShowLogout(false);
                        }}
                        className="w-full rounded-md text-left block px-4 py-2 text-sm text-white font-bold hover:bg-red-400 transition"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="sm:flex sm:gap-4">
                <Link
                  className="font-bold block rounded bg-blue-600 px-5 py-2.5 text-sm text-white transition hover:bg-white hover:text-blue-600"
                  to="/login"
                >
                  Login
                </Link>

                <Link
                  className="font-bold hidden rounded bg-gray-100 px-5 py-2.5 text-sm text-teal-600 transition hover:text-blue-600 dark:bg-gray-900 dark:text-white dark:hover:bg-white sm:block"
                  to="/register"
                >
                  Register
                </Link>
              </div>
            )}

            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-900 dark:text-white dark:hover:text-white/75 md:hidden"
              onClick={handleMenuToggle}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className=" z-40 md:hidden bg-gray-900 text-white py-4 px-2"
          aria-label="Global"
        >
          <ul className=" z-40  flex flex-col items-start gap-4">
            <li>
              <Link
                to="/home"
                className="text-white transition rounded p-3 hover:bg-blue-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition rounded p-3 hover:bg-blue-600"
                to="/profile"
              >
                My Profile
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition rounded p-3 hover:bg-blue-600"
                to="/help"
              >
                My Recipe's
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
