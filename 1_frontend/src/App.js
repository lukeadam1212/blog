import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// components
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import HomeScreen from "./screens/HomeScreen";
import BlogScreen from "./screens/BlogScreen";
import ContactScreen from "./screens/ContactScreen";
import AdminScreen from "./screens/AdminScreen";
import GalleryScreen from "./screens/GalleryScreen";

// dashboard and preferences
import Dashboard from "./components/molecules/Dashboard";
import Preferences from "./components/molecules/Preferences";
import Login from "./hooks/Login";
import PublicRoute from "./utils/PublicRoute";
import PrivateRoute from "./utils/PrivateRoute";
import { getToken, setUserSession, removeUserSession } from "./utils/Common";

function App() {
  // hooks
  // state
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get(`http://localhost:8080/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
          <Route path="/gallery" element={<GalleryScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/admin" element={<AdminScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <PublicRoute path="/login" element={<Login />} />
          <PrivateRoute path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
