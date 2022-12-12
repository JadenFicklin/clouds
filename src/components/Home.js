import React from "react";
import ReactPlayer from "react-player";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <div className="home-outer">
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
