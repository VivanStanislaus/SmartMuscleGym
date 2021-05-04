import React, { useState } from "react";
import Video from "../../videos/video.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtn,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Focus, Train, Evolve. </HeroH1>
        <HeroP>Your dreams don't work unless you do.</HeroP>
        <HeroBtnWrapper>
          <HeroBtn to="/signin" onMouseEnter={onHover} onMouseLeave={onHover}
            primary={true} dark= {true} big={true}>
            Join Now {hover ? <ArrowForward /> : <ArrowRight />}
          </HeroBtn>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
