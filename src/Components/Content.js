import "./Content.css";
import Card from "./Card.js";
import React, { useState } from "react";
const Content = (props) => {
  let FeedCard = {
    name: "",
    email: "",
    ID: "",
    phone: "",
    male: "",
    female: "",
    feed: "",
    submit: "",
  };
  const [stateName, setstateName] = useState("");
  const fullNameHandler = (event) => {
    setstateName(event.target.value);
    // console.log(event.target.value);
  };
  const [stateEmail, setstateEmail] = useState("");
  const emailHandler = (event) => {
    setstateEmail(event.target.value);
    // console.log(event.target.value);
  };
  const [stateID, setstateID] = useState("");
  const IdHandler = (event) => {
    setstateID(event.target.value);
    // console.log(event.target.value);
  };
  const [statePhone, setstatePhone] = useState("");
  const phoneHandler = (event) => {
    setstatePhone(event.target.value);
    // console.log(event.target.value);
  };
  const [stateMale, setstateMale] = useState("");
  const maleHandler = (event) => {
    setstateMale(event.target.name);
    // console.log(event.target.value);
  };
  const [stateFemale, setstateFemale] = useState("");
  const femaleHandler = (event) => {
    setstateFemale(event.target.value);
    // console.log(event.target.value);
  };
  const [stateFeedback, setstateFeedback] = useState("");
  const feedbackHandler = (event) => {
    setstateFeedback(event.target.value);
    // console.log(event.target.value);
  };

  const [stateSubmit, setstateSubmit] = useState("false");
  const handle = (event) => {
    event.preventDefault();
    setstateSubmit("true");
    FeedCard = {
      name: stateName,
      email: stateEmail,
      ID: stateID,
      phone: statePhone,
      male: stateMale,
      female: stateFemale,
      feed: stateFeedback,
      submit: stateSubmit,
    };
    // console.log(FeedCard);
    props.onSubmitting(FeedCard);
    setstateName("");
    setstateEmail("");
    setstateID("");
    setstatePhone("");
    setstateMale("");
    setstateFemale("");
    setstateFeedback("");
    setstateSubmit("false");
  };

  if (FeedCard.submit === "false") {
    return (
      <div className="Content">
        <Card></Card>
      </div>
    );
  } else {
    return (
      <div className="Content">
        <Card className="card">
          <div className="card_child1">
            <div className="header">
              <h1>Feedback form</h1>
            </div>
          </div>
          <div className="card_child2">
            <form id="form">
              <div className="form-control">
                <label>FullName</label>
                <input
                  type="text"
                  value={stateName}
                  id="fullname"
                  placeholder="Enter your full name"
                  autoComplete="off"
                  onChange={fullNameHandler}
                />
                <i className="fas fa-check-circle fa-2x"></i>
                <i className="fas fa-exclamation-circle fa-2x"></i>
                <small>Error Msg</small>
              </div>
              <div className="form-control">
                <label>E-mail</label>
                <input
                  type="email"
                  value={stateEmail}
                  id="email"
                  placeholder="Enter your e-mail id"
                  autoComplete="off"
                  onChange={emailHandler}
                />
                <i className="fas fa-check-circle fa-2x"></i>
                <i className="fas fa-exclamation-circle fa-2x"></i>
                <small>Error Msg</small>
              </div>
              <div className="form-control">
                <label>Scholar ID</label>
                <input
                  type="number"
                  value={stateID}
                  id="clg-id"
                  placeholder="Enter your Scholar-ID"
                  autoComplete="off"
                  onChange={IdHandler}
                />
                <i className="fas fa-check-circle fa-2x"></i>
                <i className="fas fa-exclamation-circle fa-2x"></i>
                <small>Error Msg</small>
              </div>
              <div className="form-control">
                <label>Mobile Number</label>
                <input
                  type="number"
                  value={statePhone}
                  id="mobile"
                  placeholder="Enter your Mobile Number"
                  autoComplete="off"
                  onChange={phoneHandler}
                />
                <i className="fas fa-check-circle fa-2x"></i>
                <i className="fas fa-exclamation-circle fa-2x"></i>
                <small>Error Msg</small>
              </div>
            </form>
          </div>
          <div className="card_child3">
            <div className="radio">
              <div className="MF">
                <div>
                  <label className="gender">Gender</label>
                </div>
                <div className="M">
                  <input
                    type="radio"
                    name="male"
                    value={stateMale}
                    id="gender"
                    onChange={maleHandler}
                  />
                  <label className="male">Male</label>
                </div>
                <div className="F">
                  <input
                    type="radio"
                    name="female"
                    value={stateFemale}
                    id="gender"
                    onChange={femaleHandler}
                  />
                  <label className="female">Female</label>
                </div>
              </div>
              <small>Error Msg</small>
            </div>
            <div className="form-control">
              <label className="feedback">Your Feedback</label>
              <textarea
                value={stateFeedback}
                id="textarea"
                onChange={feedbackHandler}
              ></textarea>
              <small>Error Msg</small>
            </div>
            <div className="submit">
              <input
                type="submit"
                value="submit"
                className="btn submit"
                id="success"
                onClick={handle}
              />
            </div>
          </div>
        </Card>
      </div>
    );
  }
};

export default Content;
