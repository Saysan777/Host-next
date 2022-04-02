import Image1 from '../images/Hello1.png';
import Image2 from '../images/Hello2.png';
import Image3 from '../images/Hello3.png';
import Image4 from '../images/Hello4.png';
import Image from 'next/image';

export const projects = [
  {
    title: "WebRTC",
    description:
      "Using webRTC and React, Node. , expressJs , Postgres we created a platform for virtual streaming for students and teachers.",
    image: <Image src= {Image1} width = "300px" height ="140px" alt="webRTC"/>,
    tags: ["Postgres", "Express", "React", "Node"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 0,
  },
  {
    title: "Portfolio",
    description:
      "Portfolio using React" ,
    image: <Image src= {Image2} width = "300px" height ="140px" />,
    tags: ["React", "JavaScript"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 1,
  },
  {
    title: "Chat System",
    description:
      "Online chat system built with react and socket io.",
    image: <Image src= {Image3} width = "300px" height ="140px" />,
    tags: ["React", "Socket"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 2,
  },
  {
    title: "Portfolio",
    description:
      "The portfolio is created using HTML, CSS and JS ",
    image: <Image src= {Image4} width = "300px" height ="140px" />,
    tags: ["React", "HTML" , "CSS"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: " Started building portfolio" },
  { year: 2019, text: "Worked in Freelancing" },
  { year: 2020, text: "Started building college projects" },
  { year: 2021, text: "Started building New projects" },
];
