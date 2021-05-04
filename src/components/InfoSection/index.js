import React from 'react'
import {Button} from '../ButtonElements'

import {
  Column2,
  ImgWrap,
  BtnWrap,
  Subtitle,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  TextWrapper,
  Topline,
  Heading,
  Column1,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  lightText,
  darkText,
  description,
  alt,
  headLine,
  Word,
  id,
  imgStart,
  topLine,
  img,
  primary,
  dark2,
  dark1,
  dark
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Topline>{topLine}</Topline>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="Contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    off-set={-80}
                    primary={primary ? 1 : 0}
                    dark1={dark1 ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    dark={ dark ? 1: 0}
                  >
                    {Word}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
