import { SkillIcon, SkillTitle, SkillDescription } from "./Styles/ModuleStyles";

type SkillsProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function Skill({ icon, title, description }: SkillsProps) {
  return (
    <>
      <SkillTitle>{title}</SkillTitle>
      <SkillIcon>{icon}</SkillIcon>
      <SkillDescription>{description}</SkillDescription>
    </>
  );
}

export { Skill };
