import React from "react";
import Navbar from "./Components/Header/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Page from "./Components/Pages/Page";
import Fruits from "./Components/Pages/Fruits/Fruits";
import Mango from "./Components/Pages/Fruits/Mango";
import Apple from "./Components/Pages/Fruits/Apple";
import Orange from "./Components/Pages/Fruits/Orange";
import Cars from "./Components/Pages/Cars/Cars";
import Lamborgini from "./Components/Pages/Cars/Lamborgini";
import BMW from "./Components/Pages/Cars/BMW";
import Tata from "./Components/Pages/Cars/Tata";
import Mumbai from "./Components/Pages/Places/Mumbai";
import Pune from "./Components/Pages/Places/Pune";
import Agra from "./Components/Pages/Places/Agra";
import Places from "./Components/Pages/Places/Places";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/fruits/mango" element={<Mango />} />
          <Route path="/fruits/apple" element={<Apple />} />
          <Route path="/fruits/orange" element={<Orange />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/lamborgini" element={<Lamborgini />} />
          <Route path="/cars/bmw" element={<BMW />} />
          <Route path="/cars/tata" element={<Tata />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/mumbai" element={<Mumbai />} />
          <Route path="/places/pune" element={<Pune />} />
          <Route path="/places/agra" element={<Agra />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
