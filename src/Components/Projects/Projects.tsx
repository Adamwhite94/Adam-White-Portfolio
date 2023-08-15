import { useState } from "react";
import {
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
} from "./ProjectComponentStyles";
import { ProjectData } from "../../Data/ProjectData";
import { ProjectComponent } from "../../Modules/Projects";
import Tilt from "react-parallax-tilt";
import { AnimatePresence } from "framer-motion";
import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";

const Projects = () => {
  const [projects] = useState(ProjectData);
  const [search, setSearch]: [string, (search: string) => void] = useState("");

  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };

  const handleDemoButton = () => {};

  return (
    <ProjectsContainer id="Projects">
      <ProjectsElements>
        <AnimatePresence>
          <ProjectsTitle
            key="projectmodal"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -300, opacity: 0 },
            }}
          >
            My Projects
          </ProjectsTitle>
          <TitleDivider></TitleDivider>
        </AnimatePresence>
{/* 
        <ProjectFilterItemsContainer>
          <ProjectSearchContainer>
            <FilterLabel htmlFor="searchfilter">
              Search for a Project
            </FilterLabel>
            <ProjectSearchFilter
              id="searchfilter"
              type="text"
              onChange={handleChange}
            />
          </ProjectSearchContainer>
        </ProjectFilterItemsContainer> */}

        <ProjectSectionContainer>
          {/* {projects.map((project: any) => {
            if (
              search === "" ||
              project.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return ( */}
                <Tilt>
                  <ProjectDataContainer
                    
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectComponent
                      project={projects[0].project}
                      title={projects[0].title}
                      description={projects[0].description}
                      stacktitle="Tech Stack"
                      reacticon={<FaReact />}
                      htmlicon={<FaHtml5 />}
                      cssicon={<FaCss3Alt />}
                      javascripticon={<BiLogoJavascript />}
                      demobutton="https://budg-it-two.vercel.app/"
                    />
                  </ProjectDataContainer>
                </Tilt>
                <Tilt>
                  <ProjectDataContainer
                    
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectComponent
                      project={projects[1].project}
                      title={projects[1].title}
                      description={projects[1].description}
                      stacktitle="Tech Stack"
                      reacticon={<FaReact />}
                      htmlicon={<FaHtml5 />}
                      cssicon={<FaCss3Alt />}
                      javascripticon={<BiLogoJavascript />}
                      demobutton="https://doggo-smash.vercel.app/"
                    />
                  </ProjectDataContainer>
                </Tilt>
                <Tilt>
                  <ProjectDataContainer
                    
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectComponent
                      project={projects[2].project}
                      title={projects[2].title}
                      description={projects[2].description}
                      stacktitle="Tech Stack"
                      reacticon={<FaReact />}
                      htmlicon={<FaHtml5 />}
                      cssicon={<FaCss3Alt />}
                      javascripticon={<BiLogoJavascript />}
                      demobutton="https://netflux-beryl.vercel.app/"
                    />
                  </ProjectDataContainer>
                </Tilt>
                <Tilt>
                  <ProjectDataContainer
                    
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectComponent
                      project={projects[3].project}
                      title={projects[3].title}
                      description={projects[3].description}
                      stacktitle="Tech Stack"
                      reacticon={<FaReact />}
                      htmlicon={<FaHtml5 />}
                      cssicon={<FaCss3Alt />}
                      javascripticon={<BiLogoJavascript />}
                      demobutton="https://task-track-tau.vercel.app/"
                    />
                  </ProjectDataContainer>
                </Tilt>
                <Tilt>
                  <ProjectDataContainer
                    
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectComponent
                      project={projects[4].project}
                      title={projects[4].title}
                      description={projects[4].description}
                      stacktitle="Tech Stack"
                      reacticon={<FaReact />}
                      htmlicon={<FaHtml5 />}
                      cssicon={<FaCss3Alt />}
                      javascripticon={<BiLogoJavascript />}
                      demobutton="https://tim-portfolio-xi.vercel.app/"
                    />
                  </ProjectDataContainer>
                </Tilt>
                <Tilt>
                  <ProjectDataContainer
                    
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectComponent
                      project={projects[5].project}
                      title={projects[5].title}
                      description={projects[5].description}
                      stacktitle="Tech Stack"
                      reacticon={<FaReact />}
                      htmlicon={<FaHtml5 />}
                      cssicon={<FaCss3Alt />}
                      javascripticon={<BiLogoJavascript />}
                      demobutton="https://to-do-nine-rho.vercel.app/"
                    />
                  </ProjectDataContainer>
                </Tilt>
              {/* );
            }
          })} */}
        </ProjectSectionContainer>
      </ProjectsElements>
    </ProjectsContainer>
  );
};
//have text appear on each side of a scroll bar animated to show projects/whatever else

export default Projects;
