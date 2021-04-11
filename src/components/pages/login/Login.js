import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

 return (
  <div className="bg-gray-50 h-screen">
    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto  h-full pb-40">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Crypto Club</span>        
      </h2>
      <div 
        onClick={() => loginWithRedirect()} 
        className="mt-6 cursor-pointer inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
        Login
      </div>      
    </div>
  </div>

  );
};

export default Login;