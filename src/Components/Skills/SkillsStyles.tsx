import styled from 'styled-components'
import { motion } from 'framer-motion';
import { device } from '../../Breakpoints/Breakpoints';

const SkillsContainer = styled.section``;
const SkillsElements = styled.section`

`;
const SkillsTitle = styled(motion.h1)`
color: #fff;
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
  padding-left: 3rem;
  height: 5rem;
  margin-top: 3rem;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    font-size: 3rem;
    height: 4rem;

}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  font-size: 3rem;
    height: 4rem;
}
`;
const TitleDivider = styled(motion.hr)`
  height: 3px;
  border: none;
  width: 25rem;
  border-radius: 1rem;
  background: #c3073f;
  margin-right: 100%;
  margin-bottom: 2rem;
  margin: 0 100% 2rem 3rem;
  

  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    margin: 0;
    width: 20rem;

}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  margin: 0;
    width: 20rem;
}
`;

const SkillsLogoContainer = styled(motion.div)`
display:grid;
grid-template-columns: repeat(4, 22rem);
justify-content: center;
margin: auto;
padding-top: 3rem;

@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  display:grid;
grid-template-columns: repeat(2, 11rem);
justify-content: center;
margin: auto;

}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  display:grid;
grid-template-columns: repeat(2, 11rem);
justify-content: center;
margin: auto;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.pixelBP}) {
  display:grid;
grid-template-columns: repeat(2, 12rem);
justify-content: center;
margin: auto;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  display:grid;
grid-template-columns: repeat(4, 11rem);
justify-content: center;
margin: auto;
padding-top: 0;
}


`;

const LogoWrapper = styled(motion.span)`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;


export{
    SkillsContainer,
    SkillsElements,
    SkillsTitle,
    TitleDivider,
    SkillsLogoContainer,
    LogoWrapper
}