import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sliderbar from "../Dummy/Sliderbar";
import Fruits from "../Pages/Fruits/Fruits";
import Mango from "../Pages/Fruits/Mango";
import Apple from "../Pages/Fruits/Apple";
import Orange from "../Pages/Fruits/Orange";
import Cars from "../Pages/Cars/Cars";
import Places from "../Pages/Places/Places";
import Lamborgini from "../Pages/Cars/Lamborgini";
import BMW from "../Pages/Cars/BMW";
import Tata from "../Pages/Cars/Tata";
import Mumbai from "../Pages/Places/Mumbai";
import Pune from "../Pages/Places/Pune";
import Agra from "../Pages/Places/Agra";

const AnotherRoute = () => {
  return (
    <div>
      <Router>
        <Sliderbar />
        <Routes>
          <Route path="/fruits" Component={Fruits} />
          <Route path="/fruits/mango" Component={Mango} />
          <Route path="/fruits/apple" Component={Apple} />
          <Route path="/fruits/orange" Component={Orange} />
          <Route path="/cars" Component={Cars} />
          <Route path="/cars/lamborgini" Component={Lamborgini} />
          <Route path="/cars/bmw" Component={BMW} />
          <Route path="/cars/tata" Component={Tata} />
          <Route path="/places" Component={Places} />
          <Route path="/places/mumbai" Component={Mumbai} />
          <Route path="/places/pune" Component={Pune} />
          <Route path="/places/agra" Component={Agra} />
        </Routes>
      </Router>
    </div>
  );
};

export default AnotherRoute;
