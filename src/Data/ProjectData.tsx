import { FaReact, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";

interface IProject {
  id: string;
  title: string;
  project: string;
  description: string;
}

export const ProjectData: IProject[] = [
  {
    id: "1",
    title: "Budg-It",
    project: require("../assets/Images/budgit.PNG"),
    description:
      "Budgeting app, allows the user to submit whether they gained money or lost money, then shows the user whether they are net positive or net negative.",
  },
  {
    id: "2",
    title: "DoggoSmash",
    project: require("../assets/Images/doggosmash.PNG"),
    description:
      "Dog selector game, the user will choose which dog they find cuter, and receive a score at the end.",
  },
  {
    id: "3",
    title: "Netflux",
    project: require("../assets/Images/netflux.PNG"),
    description:
      "Movie suggestor app, the user answers what genre of movies they would like to see, and then are provided suggestions on what movies they should watch.",
  },
  {
    id: "4",
    title: "Task-Track",
    project: require("../assets/Images/tasktrack.PNG"),
    description:
      "Task schedular, you can store a task, then see the tasks you have, and tick them off when finished.",
  },
  {
    id: "5",
    title: "Tims Portfolio",
    project: require("../assets/Images/timportfolio.PNG"),
    description:
      "Tims portfolio is a simple eportfolio showing off my friends best work.",
  },
  {
    id: "6",
    title: "Now-Or-Never",
    project: require("../assets/Images/nowornever.PNG"),
    description:
      "To-Do list allows you to store a task, then tick it off when you finish.",
  },
];
