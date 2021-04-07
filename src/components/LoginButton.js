import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const buttonStyle = {
    borderRadius: '7px',
    backgroundColor: 'rgb(66, 153, 225)',
    borderWidth: '0px',
    padding: '16px 8px',
    lineHeight: '26px',
    fontWeight: '700',
    color: 'rgb(255, 255, 255)',
    fontSize: '16px',
    cursor: 'pointer'
  }

  return (
    <button 
      onClick={() => loginWithRedirect()} 
      style={buttonStyle}>Log In
    </button>
  );
};

export default LoginButton;