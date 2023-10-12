import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
// Import your components
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Reg from "./pages/Register";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import { auth } from "./pages/firebase";
import Help from "./pages/Help";
import Coursepage from "./pages/food";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
export default function App() {
  const [user, setUser] = useState(null); // User state

  useEffect(() => {
    // Listen for Firebase Authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Set user state to the logged-in user or null
    });

    return () => {
      unsubscribe(); // Unsubscribe when component unmounts
    };
  }, []);
  const isLoggedIn = () => {
    return user !== null;
  };

  return (
    <BrowserRouter>
      <div>
        <div className="fixed flex-1 w-full z-10">
          <Navbar />
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Reg />} />
          <Route path="/help" element={<Help />} />
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          {isLoggedIn() && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/food/:id" element={<Coursepage />} />

              <Route path="/profile" element={<Profile />} />
            </>
          )}
          <Route path="*" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
