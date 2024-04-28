import Myportfolio from "../images/Myportfolio.png";
import PizzaPal from "../images/PizzaPal.png";
import ApiImage from "../images/ApiImage.png";
import villagedeskvideo from "../videos/villagedeskvideo.webm"

const projectsConfig = [
  {
    title: "My-Portfolio",
    previewImage: Myportfolio,
    description:
      "Portfolio website built using ReactJS and TailwindCSS. Includes information about me and my skills along with side projects.",
    liveDemoLink: "https://chiragraju.netlify.app/",
    githubLink: "https://github.com/ChiragRaju/My-Portfolio-ChiragRaju",
    backgroundColor: "bg-slate-500",
  },
  {
    title: "  Pizz-Pal",
    previewImage: PizzaPal,
    description:
      "Implemented a pizza ordering web application using React and Redux Toolkit, leveraging state management for seamless user interaction and efficient data handling",
    liveDemoLink: "https://pizzz-6vcva35ap-chirag-raju-ss-projects.vercel.app/",
    githubLink: "https://github.com/ChiragRaju/PizzaHouseReduxToolKit",
    backgroundColor: "bg-slate-500",
  },
  {
    title: "Villa Booking (Backend)",
    previewImage: ApiImage,
    description:
      "Developed APIs for villa booking with comprehensive CRUD functionality, incorporating user authentication and authorization using token-based authentication",
    // liveDemoLink: "NA",
    githubLink: "https://github.com/ChiragRaju/RajuVilla_API",
    backgroundColor: "bg-slate-500",
  },
  {
    title: "Chatter-Box",
    previewImage: "NA",
    description:
      "Chatter-Box is a Full Stack Chatting App. Uses Socket.io for real time communication and stores user details in encrypted format in Mongo Db",
    githubLink: "https://github.com/ChiragRaju/Chatter-Box",
    backgroundColor: "bg-slate-500",
  },
  {
    title: "Village help desk",
    video: villagedeskvideo,
    description: "One solution to raise the issues and get it resolved of your village",
    githubLink: "https://github.com/ChiragRaju/Villagehelpdesk-UI-React",
    backgroundColor: "bg-slate-500"
  }
  
];

export default projectsConfig;
