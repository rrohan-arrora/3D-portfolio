import {
  backend,
  carrent,
  creator,
  css,
  docker,
  git,
  html,
  java,
  javascript,
  jenkins,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tesla,
  tripguide,
  typescript,
  web
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "FullStack Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "DevOps Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Next JS",
      icon: html,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySql",
      icon: tailwind,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring Boot",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "terraform",
      icon: redux,
    },
    {
      name: "jenkins",
      icon: jenkins,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Ksolves",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Aug 2018 - Dec 2020",
      points: [
        "Developing and maintaining web applications using Ruby on Rails, React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Product Management Intern",
      company_name: "MedqCx",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - Feb 2023",
      points: [
        "Collaborated with the engineering and design teams to define product requirements and end users requirements.",
        "Assisted in project management, including tracking milestones and ensuring projects were delivered on time and within scope.",
        "Participated in user testing and feedback sessions to gather insights for product improvements.",
        "Contributed to the development of marketing materials and documentation for product launches.",
        "Played a considerable role in communicating the product vision and strategy to stakeholders and team members.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Qualcomm",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2023 - Jul 2023",
      points: [
        "contributions to QUALCOMM Telematics SDK to facilitate off-target SDK application development",
        "Developed the simulation libraries for various verticles and validated end to end",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Best Price",
      description:
        "A dynamic web application utilizing web scraping to extract Amazon product data from user-provided URLs, stored the information in MongoDB, implemented subscription functionality for users, and set up a daily Cron job to send email alerts notifying subscribers of any changes in their selected products.",
        tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "web scrapping",
          color: "yellow-text-gradient",
        },
        {
          name: "croning",
          color: "gray-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/rrohan-arrora/BestPrice",
    },
    {
      name: "Behind Microservices",
      description:
        "Designed and implemented a microservices architecture for Hotel ratings, comprising User, Rating, and Hotel services, registered through Eureka client, utilized Feign client for inter-service communication, and established an API Gateway as the primary entry point.",
        tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "SpringBoot",
          color: "green-text-gradient",
        },
        {
          name: "Eureka",
          color: "pink-text-gradient",
        },
        {
          name: "Feign",
          color: "yellow-text-gradient",
        },
        {
          name: "API Gateway",
          color: "gray-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/rrohan-arrora/MicroServices-in-Java",
    },
    {
      name: "Image Size Reduction",
      description:
        "Optimized image size by implementing a multi-stage Docker build, utilizing a Linux binary file in the second stage along with a Python distroless image, resulting in a significant reduction from an initial 800MB to a final size of 156MB.",
        tags: [
        {
          name: "docker",
          color: "blue-text-gradient",
        },
        {
          name: "distroless image",
          color: "green-text-gradient",
        },
        {
          name: "multi stage docker build",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "",
    },
  ];
  
  export { experiences, projects, services, technologies };
