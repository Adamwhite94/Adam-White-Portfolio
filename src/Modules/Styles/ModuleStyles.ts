import styled from "styled-components";
import { device } from "../../Breakpoints/Breakpoints";

//Navbar Module Styles

const NavbarListElements = styled.a`
  font-size: 1.3rem;
  font-weight: bold;
  padding-left: 2rem;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    margin: 2rem 0 0 1rem;
  }
  @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    margin: 2rem 0 0 1rem;
  }
`;

//Project Module Styles
const ProjectImage = styled.img`
  width: 30vw;
  height: 35vh;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    width: 21rem;
  }

  @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    width: 23rem;
  }
  @media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
    width: 23rem;
}
`;

const Icon = styled.div`
  color: white;
  font-size: 5rem;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    font-size: 2rem;
  }

  @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    font-size: 2rem;
  }
  @media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
    font-size: 5rem;
}
`;

const ProjectTitle = styled.h1`
  color: #fff;
  height: 0.5rem;
`;
const ProjectDescription = styled.h4`
  color: #fff;
  font-weight: 100;
  max-width: 25rem;
  height: 2.5rem;
  text-align: center;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    font-size: 1rem;
    max-width: 22rem;
    margin-bottom: 3rem;
  }
`;
const ProjectStackIcon = styled.span`
  color: #fff;
  font-size: 2rem;
`;

const ProjectStackTitle = styled.h3`
  color: #fff;
  height: 0.5rem;
`;

const ProjectStackDemoButton = styled.button`
  border: 1px solid white;
  background: none;
  padding: 0.4rem;
  border-radius: 1rem;
  max-width: 15rem;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;
const ProjectStackContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

//About Module Styles
const InformationTitle = styled.h1`
  height: 0.8rem;
  color: #fff;
  font-size: 5rem;

  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    font-size: 2.5rem;
    text-align: center;
  }
  @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

const Information = styled.h3`
  color: #fff;
  font-weight: 100;
  max-width: 35rem;
  font-size: 1.5rem;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    text-align: center;

    font-size: 0.7rem;
  }
  @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    text-align: center;

    font-size: 1rem;
  }
  @media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
    text-align: center;
    max-width: 36rem;
font-size: 1.3rem;
}
`;
const InformationContainer = styled.div``;

//Skill styles
const SkillIcon = styled.span`
  color: #fff;
  font-size: 13rem;
  height: 14rem;

  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    font-size: 6rem;
    height: 5rem;
  }
  @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    font-size: 6rem;
    height: 5rem;
  }
  @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    font-size: 6rem;
    height: 5rem;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  font-size: 8rem;
    height: 7rem;
}
`;

const SkillTitle = styled.h1`
  color: #fff;
  height: 0.5rem;
  font-size: 1.3rem;
  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    font-size: 1rem;
  }
  @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    font-size: 1rem;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  font-size: 1rem;
}
`;
const SkillDescription = styled.h4`
  color: #fff;
  text-align: center;
  max-width: 20rem;

  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    max-width: 10rem;
    font-size: 0.8rem;
    margin-top: 2rem;
  }
  @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
    max-width: 10rem;
    font-size: 0.8rem;
    margin-top: 2rem;
}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  max-width: 10rem;
    font-size: 0.8rem;
    margin-top: 2rem;
}
`;

//Employment styles

const FooterTitle = styled.h1`
text-align: center;
color: #fff;
`;

export {
  NavbarListElements,
  ProjectImage,
  Icon,
  Information,
  InformationTitle,
  InformationContainer,
  ProjectDescription,
  ProjectTitle,
  ProjectStackIcon,
  ProjectStackTitle,
  ProjectStackDemoButton,
  ProjectStackContainer,
  SkillIcon,
  SkillTitle,
  SkillDescription,
  FooterTitle

};
