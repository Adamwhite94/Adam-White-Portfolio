import {
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
  AboutImage,
} from "./AboutStyles";
import { InformationComponent } from "../../Modules/About";
import { AnimatePresence } from "framer-motion";

import { SkillsLogos } from "../../Data/AboutData";
import { IconList } from "../../Modules/About";

const About = () => {
  return (
    <AboutContainer id="About">
      <AboutElements>
        <AnimatePresence>
          <AboutTitle
            key="aboutmodal"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -300, opacity: 0 },
            }}
          >
            About
          </AboutTitle>
        </AnimatePresence>
        <TitleDivider></TitleDivider>

        <AboutSkillsWrapper>
          <AboutSkillsTitle>What I Love To Do</AboutSkillsTitle>
          <IconContainer>
            {SkillsLogos.map((icon) => {
              return (
                <IconCard key={icon.id}>
                  <IconTitle>{icon.title}</IconTitle>
                  <IconList icon={icon.icon} />
                  <IconDescription>{icon.description}</IconDescription>
                </IconCard>
              );
            })}
          </IconContainer>
        </AboutSkillsWrapper>
        <AboutInformationContainer>
          <InformationComponent
            title="I'm Adam White"
            info="A Frontend Developer building applications I find interesting!"
          />
          <ImageContainer>
            <AboutImage src={require("../../assets/AboutArt.png")} />
          </ImageContainer>
        </AboutInformationContainer>
      </AboutElements>
    </AboutContainer>
  );
};

export default About;
