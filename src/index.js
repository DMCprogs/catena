import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { MoralisProvider } from "react-moralis";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import AddAnHeir from "./pages/AddAnHeir";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RootBox from "./components/RootBox";
import GiftBox from "./pages/GiftBox";
import GiftBoxForYou from "./pages/GiftBoxForYou";
import GiftBoxes from "./pages/GiftBoxes";
import StartCollection from "./pages/StartCollection";
import HeirProfile from "./pages/HeirProfile";
import YourHeirs from "./pages/YourHeirs";
import CreateItem from "./pages/CreateItem";
import Collection from "./pages/Collection";
import Profile from "./pages/Profile"
import Page_404 from "./pages/404";
import Registration from "./pages/Registration";
import SignIn from "./pages/SignIn";
import Cookie from "./components/CookieModal"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootBox>
        <Cookie/>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/addanheir" element={<AddAnHeir />} />
          <Route path="/giftbox" element={<GiftBox />} />
          <Route path="/createanitem" element={<CreateItem />} />
          <Route path="/giftboxforyou" element={<GiftBoxForYou />} />
          <Route path="/giftboxes" element={<GiftBoxes />} />
          <Route path="/startcollection" element={<StartCollection />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/heirprofile" element={<HeirProfile />} />
          <Route path="/yourheirs" element={<YourHeirs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Page_404 />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="registration" element={<Registration />} />
        </Routes>
        <Footer />
      </RootBox>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
