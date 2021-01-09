import React from "react";
import Typewriter from "typewriter-effect";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="jumbotron text-danger h1 font-weight-bold text-center">
        <Typewriter
          options={{
            strings: "Welcome to the Budget App",
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <Contact />
    </>
  );
};

export default Home;
