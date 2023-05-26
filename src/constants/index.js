import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    govtech,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    treehouse,
    pokerbros,
    valency,
    xfers,
    sql,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Machine Learning Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "C++ Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Engineer Intern",
      company_name: "Govtech",
      icon: govtech,
      iconBg: "#E6DEDD",
      date: "May 2023 - December 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
      ],
    },
    {
      title: "Quantitative Analyst Intern",
      company_name: "Treehouse Finance",
      icon: treehouse,
      iconBg: "#E6DEDD",
      date: "May 2022 - Aug 2022",
      points: [
        "Worked closely with Quants and the CTO in 5 different projects, involving knowledge in Databases, APIs, Back testing. These projects were done in Python, SQL, YML and GraphQL.",
        "Developed scalable framework to query on-chain-data, directly improving the backend ability to process data of highly active users quickly.",
        "Researched and developed frameworks for classifying smart contracts to ensure accuracy pricing database, and achieved classification precision of over 95%.",
      ],
    },
    {
      title: "Payments Business Analyst Intern",
      company_name: "Xfers",
      icon: xfers,
      iconBg: "#E6DEDD",
      date: "Feb 2021 - Aug 2021",
      points: [
        "Accelerated the launch of Xfers' new product, Xfers Payments by onboarding new merchants, pitching sales deck to leads, overhauling product documentations and supporting website restructuring.",
        "Led the initiative to build the CRM tracker which improved the efficiency of converting leads.",
        "Led the sales calls and oversaw account integration in Singapore and Indonesia. Number of merchants and GTV increased by 200% for Xfers Payments and successfully onboarded the merchant contributing the highest GTV to Xfers Payments.",
      ],
    },
    {
      title: "Finance Intern",
      company_name: "Valency",
      icon: valency,
      iconBg: "#E6DEDD",
      date: "Nov 2020 - Feb 2021",
      points: [
        "Worked closely with benefactors by providing back-end data cleaning of financial data and identifying current flaws with the presentation of data to facilitate daily workflow.",
        "Customized an automated PnL Record Sheet of the Sesame Product which provided immediate models for recent trades.",
        "Collaborated with the international team to prepare and send invoices for the recent trading transactions.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "PokerBros",
      description:
        "Developed the application using Xcode, SwiftUI, Swift, Firebase. Built the database and implemented multiple features such as friend system, authentication, tracker, leaderboard, scenario based training which was tied to our database.",
      tags: [
        {
          name: "swiftUI",
          color: "blue-text-gradient",
        },
        {
          name: "swift",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: pokerbros,
      source_code_link: "https://github.com/devanshubisht/PokerBrosGITHUB",
      youtube_code_link: "https://www.youtube.com/watch?v=plldS4h9kDc",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };