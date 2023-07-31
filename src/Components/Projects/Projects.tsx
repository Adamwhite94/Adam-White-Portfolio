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
  ProjectSearchContainer
} from "./ProjectComponentStyles";
import { ProjectData } from "../../Data/ProjectData";
import { ProjectComponent} from "../../Modules/Projects";
import Tilt from "react-parallax-tilt";
import { AnimatePresence } from "framer-motion";
import {FaReact, FaCss3Alt, FaHtml5} from 'react-icons/fa'
import {BiLogoJavascript} from 'react-icons/bi'


const Projects = () => {
  const [projects] = useState(ProjectData);
  const [search, setSearch]: [string, (search: string) => void] = useState("");


  const handleChange = (e: { target: { value: string } }) => {
    setSearch(e.target.value);
  };

  const handleDemoButton = ()=>{

  }



  return (
    <ProjectsContainer id = "Projects">
      <ProjectsElements>
        <AnimatePresence>
          <ProjectsTitle
            key="projectmodal"     
            initial="hidden"
            whileInView="visible"  
            viewport={{ once: true }}
            transition = {{ duration: 0.5 }}
            variants={{
              visible: { x:0, opacity: 1 },
              hidden: { x: -300, opacity: 0 }
            }}
          >
            My Projects
          </ProjectsTitle>
          <TitleDivider></TitleDivider>
        </AnimatePresence>

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
        </ProjectFilterItemsContainer>

        <ProjectSectionContainer>
          {projects.map((project) => {
            if (
              search === "" ||
              project.title.toLowerCase().includes(search.toLowerCase())
            ) {
              // The 3rd clause doesnt filter anything
              return (
                <Tilt>
                  <ProjectDataContainer
                    key={project.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectComponent
      
                      project={project.project}
                      title={project.title}
                      description={project.description}
                      stacktitle="Tech Stack"
                      reacticon={<FaReact />}
                      htmlicon = {<FaHtml5/>}
                      cssicon = {<FaCss3Alt />}
                      javascripticon = {<BiLogoJavascript />}
                      demobutton={()=>handleDemoButton()}
                      
                      
                    />
                  </ProjectDataContainer>
                </Tilt>
              );
            }
          })}
        </ProjectSectionContainer>
      
      </ProjectsElements>
    </ProjectsContainer>
  );
};
//have text appear on each side of a scroll bar animated to show projects/whatever else

export default Projects;
