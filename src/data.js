import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import Textutils from "./assets/Textutils.png";
import Crypt from "./assets/Crypt.png";
import Java from "./assets/Java.png";
import Connect from "./assets/Connect.png";
import SocialHub from "./assets/SocialHub.png";
import OneNote from "./assets/OneNote.png";
import BMICalculator from "./assets/BMICalculator.png";
import TailUx from "./assets/TailUx.png";

export const Experience = [
  {
    id: 1,
    date: "Oct 2022 - present",
    iconsSrc: IoCodeWorking,
    title: "Core member",
    location: "CDH",
    description:
      "Conducting research and development activities, organizing and managing events, and overseeing project execution.Coordination and innovation to drive successful outcomes and meet objectives within a given timeframe.",
  },
  {
    id: 2,
    date: "Mar 2023 - Dec 2023",
    iconsSrc: IoCodeWorking,
    title: "Research Intern",
    location: "Samsung Research Institute, Bangalore",
    description:
      "Segmentation of non-smart devices based on energy consumption pattern of smart appliances. Performed research on the effects of renewable energy and built a dashboard for data visualization. Presented a series of insightful plots of model having accuracy of 97%",
  },
  
  {
    id: 3,
    date: "Feb 2023 - present ",
    iconsSrc: IoCodeWorking,
    title: "Frontend developer ",
    location: "Tailux",
    description:
      "Creative direction, enhancing user experience, and implementing visual design. Bridge the gap between design and code, translating concepts into functional interfaces while ensuring optimal performance and collaboration with designers.",
  },
  {
    id: 4,
    date: "Dec 2023 - present ",
    iconsSrc: IoCodeWorking,
    title: "Tech Lead ",
    location: "CodingNinjas X ITER",
    description:
      "Leading a team of 10+ members to develop a web application for the college. Responsible for the overall development of the project and ensuring timely delivery of the product. Conducting regular meetings to discuss the progress of the project and assigning tasks to team members.",
  },
];
export const Project = [
  {
    id: 1,
    name: "Crypto Exchange using solidity",
    img: Crypt,
    techstack: "Solidity, ReactJs, Tailwind ",
    git: "https://github.com/suhani1804/Crypto-Exchange",
  },
  {
    id:2,
    name: "Java dictonary creation",
    img: Java,
    techstack: "Java, Socket programming, Swing",
    git: "https://github.com/suhani1804/Computer_Networking_Project"
  },
  {
    id:3 ,
    name: "Connect",
    img: Connect,
    techstack: "Thirdweb, ether.js ",
    git: "https://github.com/suhani1804/Walchain"
  },
  {
    id:4,
    name: "SocialHub (Open Source)",
    img: SocialHub,
    techstack: "HTML, CSS, JavaScript",
    git: "https://github.com/CareerDevelopmentHub/SocialHub"
  },
  {
    id:5,
    name: "OneNote",
    img: OneNote,
    techstack: "React, Tailwind ,Router ",
    git: "https://github.com/suhani1804/OneNote"
  },
  {
    id: 6,
    name: "TextUtils",
    img: Textutils,
    techstack: "ReactJs, Bootstrap ",
    git: "https://github.com/suhani1804/Text-utils",
  },
  {
    id: 7,
    name: "BMI Calculator",
    img: BMICalculator,
    techstack: "JQuery, HTML, CSS",
    git: "https://github.com/suhani1804/WTW-Project"
  },
  {
    id: 8,
    name: "TailUx",
    img: TailUx,
    techstack: "ReactJs, Tailwind ",
    git: "https://github.com/suhani1804/Tailux-Front-end"
  }
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: IoLogoGithub,
    name: "GitHub",
    link: "https://github.com/suhani1804",
  },
  {
    id: 3,
    iconSrc: IoLogoLinkedin,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/suhani18/",
  },
  {
    id: 4,
    iconSrc: IoLogoTwitter,
    name: "Twitter",
    link: "https://twitter.com/SuhaniMoha16683",
  },
];
export const skill = [
  {id:1, name: "Java"},
  {id:2, name: "C"},
  {id:3, name: "JavaScript"},
  {id:4, name: "ReactJs"},
  {id:5, name: "Solidity"},
  {id:6, name: "MySQL"},
  {id:7, name: "HTML"},
  {id:8, name: "CSS"},
  {id:9, name: "Tailwind"},
  {id:10, name: "Bootstrap"},
  {id:11, name: "AWS"},
  {id:12, name: "Figma"},
  {id:13, name: "Git"},
  {id:14, name: "GitHub"},
];

export const navlinks = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "About",
    link: "#about",
  },
  {
    id: 3,
    name: "Experience",
    link: "#experience",
  },
  {
    id: 4,
    name: "Projects",
    link: "#projects",
  },
  {
    id: 5,
    name: "Skills",
    link: "#skills",
  },
  {
    id: 6,
    name: "Contact",
    link: "#contact",
  },
];
