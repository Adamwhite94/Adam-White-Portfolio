import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../Breakpoints/Breakpoints";
const AboutContainer = styled.section``;
const AboutElements = styled.div`
  z-index: 2;
`;
const AboutTitle = styled(motion.h1)`
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

const AboutSkillsTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 2rem;

  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  font-size: 1.3rem;

}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  font-size: 1.3rem;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  font-size: 1.5rem;
}
`;
const AboutDescription = styled.h3`
  color: #fff;
`;
const IconContainer = styled.section`
display:flex;
flex-direction: row;
gap: 2em;

@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
   display:grid;
   grid-template-columns: repeat(2, 2fr);

}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  display:grid;
   grid-template-columns: repeat(2, 2fr);
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  display:grid;
   grid-template-columns: repeat(2, 2fr);
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


const AboutSkillsWrapper = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  margin-top: 2rem;

}

@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  margin-top: 2rem;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
      margin-top: 2rem;
}
`;

const IconCard = styled(motion.div)`
border: 1px solid white;
padding: 0.4rem;
border-radius: 1rem;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 15rem;

@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  width: 8rem;
  height: 10rem;

}

@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  width: 11rem;
  height: 14rem;
}
`;

const IconTitle = styled.h1`
color: #fff;
font-size: 2rem;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  font-size: 1rem;

}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  font-size: 1.3rem;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  font-size: 1.3rem;
}
`;
const IconDescription = styled.h4`
color: #fff;
text-align: center;
font-weight: 100;
padding: 0.5rem;

@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  font-size: 0.7rem;
  padding: 0;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  font-size: 0.9rem;
  padding: 0;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  font-size: 0.9rem;
  padding: 0;
}

`;

const AboutInformationContainer = styled.section`
display:flex;
flex-direction: row;
justify-content: center;
gap: 3rem;
align-items: center;
margin-top: 3rem;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 0;
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 0;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  gap: 0;
}


`;
const ImageContainer = styled.div`
`;
const AboutImage = styled.img`
width: 30rem;
height: 30rem;

@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
  width: 15rem;
  height: 15rem;
}

@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  width: 18rem;
  height: 18rem;
}

`;

export {
  AboutContainer,
  AboutElements,
  AboutTitle,
  AboutSkillsTitle,
  AboutDescription,
  IconContainer,
  TitleDivider,
  AboutSkillsWrapper,
  IconCard,
  IconTitle,
  IconDescription,
  AboutInformationContainer,
  ImageContainer,
  AboutImage
};
