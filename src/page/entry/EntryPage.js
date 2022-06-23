import React, { useState } from "react";
import { Card } from "react-bootstrap";
import LoginComponent from "../../components/login/LoginComponent";
import ResetPassword from "../../components/resetPassword/ResetPassword";
import "./Entry_page.css";
const EntryPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  /*----------------------------------------------------------*/
  /*                 HANDLE FUNCTIONALITY START               */
  /*----------------------------------------------------------*/
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Fill up all the field");
    }
    console.log(email, password);
  };

  const handleOnSubmitPassword = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Fill up all the field");
    }
    console.log(email);
  };
  /*----------------------------------------------------------*/
  /*                  HANDLE FUNCTIONALITY END                */
  /*----------------------------------------------------------*/
  return (
    <div className="entry_page bg-info">
      {formLoad === "login" && (
        <Card body className="shadow-lg">
          <LoginComponent
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            setFormLoad={setFormLoad}
            email={email}
            pass={password}
          />
        </Card>
      )}
      {formLoad === "reset" && (
        <Card body className="shadow-lg">
          <ResetPassword
            handleOnChange={handleOnChange}
            setFormLoad={setFormLoad}
            handleOnSubmitPassword={handleOnSubmitPassword}
            email={email}
          />
        </Card>
      )}
    </div>
  );
};

export default EntryPage;
