import React from "react";
import Login from "./Login";
function Welcome() {
  return (
    <div className=" relative">
        <div>
            <Login/>
         </div>
        <div>
        <img
        src="https://i.imgur.com/52P41TB.jpg"
        alt="scren"
        className="w-full h-screen"
      />
        </div>
     
    </div>
  );
}

export default Welcome;
