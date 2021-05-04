import React from 'react'
import  Icon1  from "../../images/svg-4.svg"
import  Icon2  from "../../images/svg-5.svg"
import  Icon3  from "../../images/svg-6.svg"
import  Icon4  from "../../images/svg-7.svg"
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
  ServicesIcon,
} from "./ServicesElements";
const Services = () => {
    return (
      <>
        <ServicesContainer id="Packages">
          <ServicesH1>Our Packages</ServicesH1>
          <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon3} />
              <ServicesH2>Monthly</ServicesH2>
              <ServicesP>
                1000 INR
              </ServicesP>
            </ServicesCard>

            <ServicesCard>
              <ServicesIcon src={Icon3} />
              <ServicesH2>Half Yearly</ServicesH2>
              <ServicesP>
                5000 INR
              </ServicesP>
            </ServicesCard>

            <ServicesCard>
              <ServicesIcon src={Icon3} />
              <ServicesH2>Yearly</ServicesH2>
              <ServicesP>
                9000 INR
              </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon1} /><br />
              <ServicesH2>CrossFit Trainer</ServicesH2>
              <ServicesP>
                3000 INR/ Month
              </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon2} />
              <ServicesH2>Yoga Trainer</ServicesH2>
              <ServicesP>
                2000 INR/Month
              </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon4} />
              <ServicesH2>Calasthanics Trainer</ServicesH2>
              <ServicesP>
                4000 INR/ Month
              </ServicesP>
            </ServicesCard>
          </ServicesWrapper>
        </ServicesContainer>
      </>
    );
}

export default Services;
