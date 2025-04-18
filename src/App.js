import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./container/Home/home";
import About from "./container/About/service";
import ContactPage from "./container/Contact/contact";
import NavBar from "./container/Home/nav";

function App() {
  let titleHome = { key: "/", title: "Home" };
  let titleAbout = { key: "/about", title: "About Me" };
  let titleContact = { key: "/contact", title: "Contact" };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home title={titleHome.title} />} />
        <Route path="/service" element={<About title={titleAbout.title} />} />
        <Route
          path="/contact"
          element={<ContactPage title={titleContact.title} />}
        />
      </Routes>
    </>
  );
}

export default App;
