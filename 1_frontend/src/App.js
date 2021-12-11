import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import BlogScreen from "./screens/BlogScreen";
import ContactScreen from "./screens/ContactScreen";
import AdminScreen from "./screens/AdminScreen";

function App() {
  // hooks
  // state
  const [loading] = useState(false);
  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/blog" element={<BlogScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/admin" element={<AdminScreen />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
