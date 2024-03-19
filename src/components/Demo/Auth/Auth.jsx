import React, { useState } from "react";
import LoginAuth from "../../LoginAuth/LoginAuth";
import SignupAuth from "../../SignupAuth/SignupAuth";
import { motion } from "framer-motion";

const Auth = () => {
  const [createUser, setCreateUser] = useState(true);
  const handleButtonClick = () => {
    setCreateUser(!createUser);
  };

  return (
    <div>
      <motion.div
        className="form-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {createUser ? (
          <LoginAuth onButtonClick={handleButtonClick} />
        ) : (
          <SignupAuth onButtonClick={handleButtonClick} />
        )}
      </motion.div>
    </div>
  );
};

export default Auth;
