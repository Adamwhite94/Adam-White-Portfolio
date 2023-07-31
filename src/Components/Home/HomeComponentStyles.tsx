import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../Breakpoints/Breakpoints";

const HomeContainer = styled.main`
  height: 100vh;
`;
const HomeElements = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
`;
const HomeGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15rem;
`;

const Links = styled.div`
  cursor: pointer;
  color: #fff;

  &:visited {
    color: white;
  }
  &:focus {
    color: white;
  }
`;

const LinksGroup = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    margin: 1rem 0 0 0 0;
}

@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  margin: 1rem 0 0 0 0;
}
`;

const HomeTitleContainer = styled(motion.div)`
  height: 6.5rem;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    margin-left: 0.1rem;
    height: 3rem;

}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  margin-left: 0.1rem;
    height: 3rem;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  margin-left: 0.1rem;
    height: 6rem;
}
`;
const HomeTitleInnerContainer = styled(motion.span)`
  color: #fff;
  font-size: 6rem;
  font-weight: bold;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    font-size: 3rem;

}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  font-size: 3rem;
}
 
`;

const HomeSmallTitle = styled(motion.h3)`
  color: #c3073f;
  font-size: 3rem;
  margin: 0;
  font-weight: 100;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    font-size: 2rem;
    margin: 0.3rem 0 0 0;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  font-size: 2rem;
    margin: 0.3rem 0 0 0;
}
 
 
`;
const HomeButton = styled(motion.button)`
  border: none;
  background: none;
  color: #fff;
  font-size: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const Link = styled.a`
color: white;
&:hover{
  color: white;
}
&:visited{
  color: white;
}


`;

const ParticleWrapper = styled.div`
    position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
`;


export {
  HomeContainer,
  HomeElements,
  HomeGroup,
  Links,
  LinksGroup,
  HomeTitleContainer,
  HomeTitleInnerContainer,
  HomeSmallTitle,
  HomeButton,
  Link,
  ParticleWrapper
};
