import React, { useState, useEffect } from "react";
import { auth } from "./firebase"; // Import Firebase auth

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="container mx-auto p-4 lg:p-6 flex flex-col lg:flex-row lg:space-x-4 lg:pt-28">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 p-4 mb-4 lg:mb-0 bg-white rounded-lg shadow-md">
        {user && (
          <>
            <div className="text-center mb-4">
              <img
                src={user.photoURL || "default-avatar-url"}
                alt="User"
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h2 className="text-2xl font-semibold mt-2">
                {user.displayName || "User"}
              </h2>
            </div>
            <button className="bg-blue-500 text-white w-full py-2 rounded-lg mb-2">
              Change Password
            </button>
            <button
              onClick={() => auth.signOut()}
              className="bg-red-500 text-white w-full py-2 rounded-lg"
            >
              Logout
            </button>
          </>
        )}
      </aside>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 p-4 bg-white rounded-lg shadow-md">
        <div className="bg-gray-200 rounded-md text-center py-4">
          <h2 className="text-2xl font-semibold">Personal Information</h2>
        </div>
        {user ? (
          <div className="p-6">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">First Name:</label>
              <input
                type="text"
                value={user.displayName || ""}
                readOnly
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email Address:</label>
              <input
                type="text"
                value={user.email}
                readOnly
                className="w-full p-2 border rounded-lg"
              />
            </div>
            {/* Add more fields as per the design */}
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-xl font-semibold">
              Please sign in to view your profile.
            </p>
            <button
              onClick={() =>
                auth.signInWithPopup(/* Add your preferred authentication provider here */)
              }
              className="mt-4 bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
