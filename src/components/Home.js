import React from "react";
import ReactPlayer from "react-player";
import cloudsVideo from "../assets/clouds.mp4";
import "../styles/Home.css";

function Home() {
  const vidClouds = cloudsVideo;

  return (
    <>
      <div className="home-outer">
        <ReactPlayer
          url={vidClouds}
          playing={true}
          muted
          loop={true}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </>
  );
}

export default Home;
