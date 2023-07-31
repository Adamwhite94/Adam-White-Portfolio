import { Skill } from "../../Modules/Skills";
import {
  SkillsContainer,
  SkillsElements,
  SkillsTitle,
  TitleDivider,
  SkillsLogoContainer,
  LogoWrapper,
} from "./SkillsStyles";
import { AnimatePresence } from "framer-motion";

import { SkillsIcons } from "../../Data/SkillsData";

const Skills = () => {
  return (
    <SkillsContainer id="Skills">
      <SkillsElements>
        <AnimatePresence>
          <SkillsTitle
            key="skillsmodal"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -300, opacity: 0 },
            }}
          >
            Skills
          </SkillsTitle>
        </AnimatePresence>
        <TitleDivider></TitleDivider>

        <SkillsLogoContainer>
          <AnimatePresence>
          {SkillsIcons.map((icon) => {
            return (
              <LogoWrapper
              key="skillsicons"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { transform: "scale(1)"},
                hidden: { transform: "scale(0)"},
              }}
              >
                <Skill
                  title={icon.title}
                  icon={icon.icon}
                  description={icon.description}
                />
              </LogoWrapper>
            );
          })}
          </AnimatePresence>
        </SkillsLogoContainer>
      </SkillsElements>
    </SkillsContainer>
  );
};

export default Skills;
