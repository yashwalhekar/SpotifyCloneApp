import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddSong from "./pages/AddSong";
import AddAlbum from "./pages/AddAlbum";
import ListSong from "./pages/ListSong";
import ListAlbums from "./pages/ListAlbums";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";

export const url = "http://localhost:4000"
const App = () => {
  return (
    <div className="flex items-start min-h-screen">
      {/* <ToastContainer /> */}
      <SideBar />
      <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]">
        <Navbar/>
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
          <Routes>
            <Route path="/add-song" element={<AddSong />}></Route>
            <Route path="/add-album" element={<AddAlbum />}></Route>
            <Route path="/list-song" element={<ListSong />}></Route>
            <Route path="/list-album" element={<ListAlbums />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
