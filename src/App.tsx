import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Index";
import Feed from "./components/Feed/Index";
import Profile from "./components/Profile/Index";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;