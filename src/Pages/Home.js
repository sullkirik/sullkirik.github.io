import React from "react";
import Carousel from "../components/Carousel";
import News from "../components/News";
import Info from "../components/Info";
import ImageGrid from "../components/ImageGrid";
import Team from "../components/Team";
import SmartSolution from "../components/SmartSolution";
import SmartSolutionVideo from "../components/SmartSolutionVideo";





function Home() {
  return (
    <>
      <Carousel/>    
      <News/>
      <Info/>
      <ImageGrid/>
      <SmartSolution/>
      <SmartSolutionVideo/>
      <Team/>
    </>
  );
}

export default Home;
