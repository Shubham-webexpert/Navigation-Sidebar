import React, { useState } from "react";
import "./pages.css";
import Navbar from "../Header/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const [rate, setRate] = useState();
  const Navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%" }}>
          <Sidebar />
        </div>

        <div className="new">
        
        </div>
        <div className="container d-flex justify-content-center mt-100">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <span className="myratings">{rate}</span>
                  <h4 className="mt-1">Rate us</h4>

                  <fieldset className="rating">
                    <input
                      type="radio"
                      id="star5"
                      name="rating"
                      value="5"
                      onChange={(e) => setRate(e.target.value)}
                    />
                    <label
                      className="full"
                      htmlFor="star5"
                      title="Awesome - 5 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star4half"
                      name="rating"
                      value="4.5"
                      onChange={(e) => setRate(e.target.value)}
                    />
                    <label
                      className="half"
                      htmlFor="star4half"
                      title="Pretty good - 4.5 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star4"
                      name="rating"
                      value="4"
                      onChange={(e) => setRate(e.target.value)}
                    />
                    <label
                      className="full"
                      htmlFor="star4"
                      title="Pretty good - 4 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star3half"
                      name="rating"
                      value="3.5"
                      onChange={(e) => setRate(e.target.value)}
                    />
                    <label
                      className="half"
                      htmlFor="star3half"
                      title="Meh - 3.5 stars"
                    ></label>
                    <input type="radio" id="star3" name="rating" value="3" />
                    <label
                      className="full"
                      htmlFor="star3"
                      title="Meh - 3 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star2half"
                      name="rating"
                      value="2.5"
                      onChange={(e) => setRate(e.target.value)}
                    />
                    <label
                      className="half"
                      htmlFor="star2half"
                      title="Kinda bad - 2.5 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star2"
                      name="rating"
                      value="2"
                      onChange={(e) => setRate(e.target.value)}
                    />
                    <label
                      className="full"
                      htmlFor="star2"
                      title="Kinda bad - 2 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star1half"
                      name="rating"
                      value="1.5"
                      onChange={(e) => setRate(e.target.value)}
                    />
                    <label
                      className="half"
                      htmlFor="star1half"
                      title="Meh - 1.5 stars"
                    ></label>
                    <input
                      type="radio"
                      id="star1"
                      name="rating"
                      value="1"
                      onChange={(e) => setRate(e.target.value)}
                    />
                    <label
                      className="full"
                      htmlFor="star1"
                      title="Sucks big time - 1 star"
                    ></label>
                    <input
                      type="radio"
                      id="starhalf"
                      name="rating"
                      value="0.5"
                      onChange={(e) => setRate(e.target.value)}
                    />
                    <label
                      className="half"
                      htmlFor="starhalf"
                      title="Sucks big time - 0.5 stars"
                    ></label>
                    <input
                      type="radio"
                      className="reset-option"
                      name="rating"
                      value=""
                      onChange={(e) => setRate(e.target.value)}
                    />
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
