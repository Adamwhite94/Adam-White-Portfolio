import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../Breakpoints/Breakpoints";

const ProjectsContainer = styled.section``;
const ProjectsElements = styled.section`
  padding-top: 4rem;
`;
const ProjectsTitle = styled(motion.h1)`
  color: #fff;
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
  padding-left: 3rem;
  height: 5rem;

  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    font-size: 3rem;
    height: 4rem;

}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  font-size: 3rem;
    height: 4rem;
}
`;

const ProjectDataContainer = styled(motion.section)`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const ProjectSectionContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap:1rem;

  @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    grid-template-columns: repeat(1, 23.2rem);

}
@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  grid-template-columns: repeat(1, 26.8rem);
}
@media only screen and (${device.mobileLSmallerBP}) and (${device.pixelBP}) {
  grid-template-columns: repeat(1, 25.8rem);

}
@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  grid-template-columns: repeat(2, 24rem);
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



const ProjectFilterItemsContainer = styled.div`
display:flex;
align-items: flex-end;
justify-content: flex-end;
padding-right: 7rem;
margin-bottom: 1rem;
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-left: 6.5rem;

}



@media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
  display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-left: 6.5rem;
}

@media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
  display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-left: 6.5rem;
}


`;

const FilterLabel = styled.label`
color: #fff;
font-weight: bold;

`;
const ProjectSearchFilter = styled.input`
width: 15rem;
height: 1.4rem;

`;

const ProjectSearchContainer = styled.div`
display:flex;
flex-direction: column;
gap: 0.3rem;

`;





export {
  ProjectsContainer,
  ProjectsElements,
  ProjectsTitle,
  ProjectDataContainer,
  ProjectSectionContainer,
  TitleDivider,
  ProjectFilterItemsContainer,
  FilterLabel,
  ProjectSearchFilter,
  ProjectSearchContainer,

 
};
