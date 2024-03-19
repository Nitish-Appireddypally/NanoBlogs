import React, { useState } from "react";
import LoginAuth from "../../LoginAuth/LoginAuth";
import SignupAuth from "../../SignupAuth/SignupAuth";

const Auth = () => {
  const [createUser, setCreateUser] = useState(true);
  const handleButtonClick = () => {
    setCreateUser(!createUser);
  };

  return (
    <div>
      {createUser ? (
        <LoginAuth onButtonClick={handleButtonClick} />
      ) : (
        <SignupAuth onButtonClick={handleButtonClick} />
      )}
    </div>
  );
};

export default Auth;
