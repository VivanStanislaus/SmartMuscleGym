import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksTitle,
  FooterWrap,
  FooterLink,
  FooterLinkItems,
  FooterLinksWrapper,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  WebsiteRights,
  SocialMedia,
  SocialMediaWrap,
  ContactUsH1,
  
} from "./FooterElements";

const Footer = () => {
    return (
      <>
        <FooterContainer id='Contact'>
          <FooterWrap>
              <ContactUsH1>Contact Us</ContactUsH1>
            <FooterLinksContainer>
              <FooterLinksWrapper>
                
                <FooterLinkItems>
                  <FooterLinksTitle>Our Branches</FooterLinksTitle>
                  <FooterLink to="">Mumbai</FooterLink>
                  <FooterLink to="">Pune</FooterLink>
                  <FooterLink to="">Hydrabad</FooterLink>
                  <FooterLink to="">Delhi</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLinksTitle>Contact Us</FooterLinksTitle>
                  <FooterLink to="">8485726390</FooterLink>
                  <FooterLink to="">9484785900</FooterLink>
                  <FooterLink to="">7558678590</FooterLink>
                  <FooterLink to="">0259435235</FooterLink>
                  
                </FooterLinkItems>

                <FooterLinkItems>
                  <FooterLinksTitle>Receptionist</FooterLinksTitle>
                  <FooterLink to="">Priya Menon</FooterLink>
                  <FooterLink to="">Kajal Desai</FooterLink>
                  <FooterLink to="">Asmaan Shah</FooterLink>
                  <FooterLink to="">Nishant Deshpande</FooterLink>
                  
                </FooterLinkItems>

                <FooterLinkItems>
                  <FooterLinksTitle>Branch Head</FooterLinksTitle>
                  <FooterLink to="">Ibrar Kadri</FooterLink>
                  <FooterLink to="">Mitesh Jaiman</FooterLink>
                  <FooterLink to="">Shivam Pandey</FooterLink>
                  <FooterLink to="">Ronak Shah</FooterLink>
                  
                </FooterLinkItems>
                
              </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia> 
               <SocialMediaWrap>
                <SocialLogo to="/">Smart Muscle Gym</SocialLogo>
                <WebsiteRights>
                  Smart Muscle Gym {new Date().getFullYear()} All Rights Reserved.
                </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink  href='https://www.instagram.com/vivan_stanislaus/' target= '_blank' aria-label='Instagram'><FaInstagram /></SocialIconLink>
                    <SocialIconLink  href='https://www.facebook.com/vivan.stanislaus.79' target= '_blank' aria-label='Facebook'><FaFacebook /></SocialIconLink>
                    <SocialIconLink  href='https://github.com/VivanStanislaus' target= '_blank' aria-label='Github'><FaGithub /></SocialIconLink>
                    <SocialIconLink  href='linkedin.com/in/vivan-stanislaus-22741b1a3' target= '_blank' aria-label='Linkdin'><FaLinkedin /></SocialIconLink>
                    
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
          </FooterWrap>
        </FooterContainer>
      </>
    );
}

export default Footer
