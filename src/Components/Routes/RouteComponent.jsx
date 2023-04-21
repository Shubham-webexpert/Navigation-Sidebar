import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "../Pages/Page";
import Fruits from "../Pages/Fruits/Fruits";
import Mango from "../Pages/Fruits/Mango";
import Apple from "../Pages/Fruits/Apple";
import Orange from "../Pages/Fruits/Orange";
import Lamborgini from "../Pages/Cars/Lamborgini";
import Cars from "../Pages/Cars/Cars";
import BMW from "../Pages/Cars/BMW";
import Tata from "../Pages/Cars/Tata";
import Places from "../Pages/Places/Places";
import Mumbai from "../Pages/Places/Mumbai";
import Pune from "../Pages/Places/Pune";
import Agra from "../Pages/Places/Agra";

const RouteComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Page />
        <Routes>
          <Route path="fruits" exact Component={Fruits} />
          <Route path="fruits/mango" exact Component={Mango} />
          <Route path="fruits/apple" exact Component={Apple} />
          <Route path="fruits/orange" exact Component={Orange} />
          <Route path="/cars" exact Component={Cars} />
          <Route path="/cars/lamborgini" exact Component={Lamborgini} />
          <Route path="/cars/bmw" exact Component={BMW} />
          <Route path="/cars/tata" exact Component={Tata} />
          <Route path="/places" exact Component={Places} />
          <Route path="/places/mumbai" exact Component={Mumbai} />
          <Route path="/places/pune" exact Component={Pune} />
          <Route path="/places/agra" exact Component={Agra} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteComponent;
