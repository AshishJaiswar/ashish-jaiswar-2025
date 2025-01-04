import {
  SiInfosys,
  SiTcs,
  SiAccenture,
  SiReact,
  SiFreecodecamp,
} from "react-icons/si";

const experienceData = [
  {
    company: "Accenture",
    role: "Sr. Frontend developer",
    date: "Sep 2024 - Present",
    icon: <SiAccenture size="30px" />,
  },
  {
    company: "TCS",
    role: "Frontend developer",
    date: "Apr 2023 - Sep 2024",
    icon: <SiTcs size="30px" />,
  },
  {
    company: "Infosys",
    role: "Python developer",
    date: "Nov 2020 - Mar 2023",
    icon: <SiInfosys size="30px" />,
  },
];

const awardsData = [
  {
    title: "INSTA Award",
    company: "Infosys",
    icon: <SiInfosys size="30px" />,
    date: "Jun 2022",
    link: "https://drive.google.com/file/d/1FYcMNlBfjutdm68KbQczTaiD4YAMXzhY",
  },
  {
    title: "React 18 certification",
    company: "CodeWithMosh",
    icon: <SiReact size="30px" />,
    date: "May 2023",
    link: "https://drive.google.com/file/d/1mfk_fOZfwIDT9MJdsqzi4W1RZuuVLOwb",
  },
  {
    title: "JavaScript certification",
    company: "FreeCodeCamp",
    icon: <SiFreecodecamp size="30px" />,
    date: "Mar 2024",
    link: "https://www.freecodecamp.org/certification/ashishjaiswar/javascript-algorithms-and-data-structures-v8",
  },
];

export { experienceData, awardsData };
