import {
  ProjectImage,
  ProjectDescription,
  ProjectTitle,
  ProjectStackIcon,
  ProjectStackTitle,
  ProjectStackDemoButton,
  ProjectStackContainer,
} from "./Styles/ModuleStyles";


type ProjectImageProps = {
  project: string;
  title: string;
  description: string;
  stacktitle: string;
  reacticon: React.ReactNode;
  htmlicon: React.ReactNode;
  cssicon: React.ReactNode;
  javascripticon: React.ReactNode;
  demobutton: string;
};

function ProjectComponent({
  title,
  description,
  project,
  reacticon,
  htmlicon,
  cssicon,
  javascripticon,
  stacktitle,
  demobutton,
}: ProjectImageProps) {

  return (
    <>
      <ProjectImage src={project} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectStackTitle>{stacktitle}</ProjectStackTitle>
      <ProjectStackContainer>
        <ProjectStackIcon>{reacticon}</ProjectStackIcon>
        <ProjectStackIcon>{htmlicon}</ProjectStackIcon>
        <ProjectStackIcon>{cssicon}</ProjectStackIcon>
        <ProjectStackIcon>{javascripticon}</ProjectStackIcon>
      </ProjectStackContainer>
      
      <ProjectStackDemoButton href={demobutton} >
        Visit
      </ProjectStackDemoButton>
      {/* renders 6 times in total, if you map an array of 6. it will render 6 */}
    </>
  );
}

export { ProjectComponent };
