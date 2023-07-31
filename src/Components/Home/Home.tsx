import { useState } from "react";
import {
  HomeContainer,
  HomeElements,
  HomeGroup,
  Links,
  LinksGroup,
  HomeTitleContainer,
  HomeTitleInnerContainer,
  HomeSmallTitle,
  HomeButton,
  Link,
  ParticleWrapper
} from "./HomeComponentStyles";
import Navbar from "../Navbar/Navbar";
import { AiFillGithub, AiFillLinkedin, AiOutlinePaperClip } from "react-icons/ai";
import HomeParticles from "./HomeParticles";
import Resume from "../../assets/Resume/Resume.pdf"

const Home = () => {
  const [title] = useState<string>("Adam White");

  const words = Array.from(title);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <HomeContainer id = "Home">
      <ParticleWrapper>
      <HomeParticles />
      </ParticleWrapper>
      <Navbar />
      <HomeElements>
        <HomeGroup>
          <HomeTitleContainer
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <HomeTitleInnerContainer variants={child} key={index}>
                {word === " " ? "\u00A0" : word}
              </HomeTitleInnerContainer>
            ))}
          </HomeTitleContainer>
          <HomeSmallTitle
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 0.3,
             ease: [0, 0.71, 0.4, 0.9],
             scale: {
               type: "spring",
               damping: 5,
               stiffness: 60,
               restDelta: 0.001
             }
           }}
          >
            React Developer
          </HomeSmallTitle>
        </HomeGroup>
        <LinksGroup>
          <Links>
            <Link href="https://github.com/Adamwhite94"><AiFillGithub size={30} /></Link>
          </Links>
          <Links>
           <Link href="https://www.linkedin.com/in/adam-white-front-end/"> <AiFillLinkedin size={30} /></Link>
          </Links>
          <Links>
           <Link href={Resume} download="Adam_White_Frontend_Developer_Resume.pdf"> <AiOutlinePaperClip size={30} /></Link>
          </Links>
        </LinksGroup>
        <HomeButton></HomeButton>
      </HomeElements>
    </HomeContainer>
  );
};

export default Home;
