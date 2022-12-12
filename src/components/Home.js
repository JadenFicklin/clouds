import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../styles/Home.css";

function Home() {
  const [button, setButton] = useState(false);
  console.log(button);
  return (
    <>
      <div className="home-button">
        <div
          className={button ? "home-text-false" : "home-text"}
          onClick={() => setButton(!button)}
        ></div>
      </div>
      <div className={button ? "home-outer-false" : "home-outer"}>
        <ReactPlayer
          url={"assets/clouds.mp4"}
          playing={true}
          muted
          loop={true}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default Home;
