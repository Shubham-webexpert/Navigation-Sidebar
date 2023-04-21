import React, { useState } from "react";
import "./ratings.css";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const style = {
  position: "absolute",
  top: "50%",
  left: "62%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

const Ratings = () => {
  const [rate, setRate] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ position: "absolute", top: "10rem", right: "30rem" }}>
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
                    onChange={(e) => {
                      setRate(e.target.value);
                      handleOpen(e);
                    }}
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
                    onChange={(e) => {
                      setRate(e.target.value);
                      handleOpen(e);
                    }}
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
                    onChange={(e) => {
                      setRate(e.target.value);
                      handleOpen(e);
                    }}
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
                    onChange={(e) => {
                      setRate(e.target.value);
                      handleOpen(e);
                    }}
                  />
                  <label
                    className="half"
                    htmlFor="star3half"
                    title="Meh - 3.5 stars"
                  ></label>
                  <input type="radio" id="star3" name="rating" value="3"   onChange={(e) => {
                    setRate(e.target.value);
                    handleOpen(e);
                  }}/>
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
                    onChange={(e) => {
                      setRate(e.target.value);
                      handleOpen(e);
                    }}   
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
                    onChange={(e) => {
                      setRate(e.target.value);
                      handleOpen(e);
                    }}
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
                    onChange={(e) => {
                      setRate(e.target.value);
                      handleOpen(e);
                    }}
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
                    onChange={(e) => {
                      setRate(e.target.value);
                      handleOpen(e);
                    }}
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
                    onChange={(e) => {
                      setRate(e.target.value);
                      handleOpen(e);
                    }}
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
                  />
                </fieldset>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", width: "80%", marginTop: 20 }}>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <h2 className="feedbacktext2">You gave us {rate} star Ratings</h2>
                <h3 className="feedbacktext">
                  Thank you for your feedback <SentimentSatisfiedAltIcon />
                </h3>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
