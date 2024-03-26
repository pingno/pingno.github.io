/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Peang Ngo",
  title: "Hi I'm Peang",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 experienced in building web applications with JavaScript / Python / React.js and other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1WFtfn8tDJIZWwVds7nDaUXCP7P3Hf8-njMejX0fhjoY/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pingno",
  linkedin: "https://www.linkedin.com/in/peang-ngo-840860112/",
  gmail: "pngo93@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  instagram: "https://www.instagram.com/bye_joyboy/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER EXPLORING FUN FRAMEWORKS AND LIBRARIES",
  skills: [
    emoji(
      "⚡ Develop highly engaging Front end / User Interfaces for web applications"
    ),
    emoji("⚡ Write QA tests to maintain proper functionality on any website"),
    emoji("⚡ Integrate third party services (ex. AWS, Google Cloud Platform)")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },

    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "App Academy",
      logo: require("./assets/images/appacademy.png"),
      subHeader: "Full-Stack Software Engineering Bootcamp",
      duration: "July 2023 - December 2019",
      desc: "A comprehensive, full-stack web development course totalling over 1000 hours of immersion",
      descBullets: [
        "Python, JavaScript",
        "Data Structures & Algorithms, Object Oriented Programming (OOP), Agile development, Scrum & Kanban, Test Driven Development (TDD), and more"
      ]
    },
    {
      schoolName: "Richland College",
      logo: require("./assets/images/richland.png"),
      subHeader: "Associates in Liberal Arts",
      duration: "September 2011 - September 2013"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "E-commerce Streamer",
      company: "Hakishop",
      companylogo: require("./assets/images/whatnot.png"),
      date: "Jan 2023 – Jun 2023",
      desc: "Applied data analysis techniques and implemented sales strategies to optimize revenue generation and enhance customer satisfaction in e-commerce streaming services, showcasing proficiency in data-driven decision-making and customer-centric approaches.",
      // descBullets: [
      //   "Cultivated a loyal customer base through personalized interactions, fostering trust and loyalty within the community",
        
      // ]
    },
    {
      role: "Repair Technician",
      company: "FAO",
      companylogo: require("./assets/images/dayze.png"),
      date: "May 2022 – Oct 2022",
      desc: "Demonstrated strong problem-solving skills and technical expertise in diagnosing and resolving issues with electronic devices, ensuring maximum uptime and productivity for clients, highlighting aptitude for troubleshooting and technical problem-solving essential for technical roles."
    },
    {
      role: "Email Marketing Specialist",
      company: "Dallas Fitness Ambassadors",
      companylogo: require("./assets/images/dfa.png"),
      date: "May 2018 – Feb 2019",
      desc: "Directed and optimized email marketing campaigns, utilizing data analysis to drive engagement and improve campaign performance, showcasing proficiency in leveraging data analytics tools and strategies crucial for informed decision-making and optimization in various projects."
    },
    {
      role: "Web Design Intern",
      company: "WildBlueDesign",
      companylogo: require("./assets/images/dayze.png"),
      date: "Jun 2017 – April 2018",
      desc: "Contributed to the enhancement of website performance through SEO optimization, emphasizing a deep understanding of web technologies and principles, demonstrating familiarity with web development concepts and practices valuable for digital projects."
    },
    {
      role: "Social Media Manager",
      company: "DFC Headquarters",
      companylogo: require("./assets/images/dfc.png"),
      date: "May 2017 – May 2018",
      desc: "Managed projects and social media initiatives, effectively increasing audience engagement and traffic across digital platforms, demonstrating strong communication and project management skills essential for collaborative environments."
    },
    {
      role: "Team Director",
      company: "Dancing for a Cause",
      companylogo: require("./assets/images/dfc.png"),
      date: "8+ Years",
      desc: "Directed and mentored diverse teams, while leading classes as a Team Director at a non-profit dance organization, demonstrating exceptional leadership, communication, and team management abilities in a creative environment."
    },
    {
      role: "Server / Bartender",
      company: "Hospitality Ind.",
      companylogo: require("./assets/images/dayze.png"),
      date: "8+ Years",
      desc: "Excelled in delivering outstanding customer service and thriving in fast-paced environments within the hospitality industry, showcasing unparalleled adaptability, multitasking prowess, and teamwork skills under pressure."
    },
    {
      role: "Entrepreneur / Digital Marketer",
      company: "Extra",
      companylogo: require("./assets/images/dayze.png"),
      date: "3+ Years",
      desc: "Showcased initiative and adaptability through self-taught entrepreneurship in digital marketing ventures, honing analytical, problem-solving, and innovation skills in navigating various online business endeavors."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};



// Some big projects you have worked on

const bigProjects = {
  title: "Cool Projects",
  subtitle:
    "SOME COOL PROJECTS THAT HELPED ME LEARN NEW FRAMEWORKS AND LIBRARIES",
  projects: [
    {
      image: require("./assets/images/dayze.png"),
      projectName: "Dayze",
      projectDesc:
        "A social platform built to support a community sharing their journey of interests",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dayze.onrender.com/"
        },
        {
          name: "Github Repo",
          url: "https://github.com/pingno/Capstone-Project"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/parma-icon.png"),
      projectName: "Parmazon Prime",
      projectDesc:
        "An E-commerce web application developed across one week in collaboration with three other developers",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://parmazon-prime.onrender.com/"
        },
        {
          name: "Github Repo",
          url: "https://github.com/sophie97yang/Parmazon-Prime"
        }
      ]
    },
    {
      image: require("./assets/images/clarion-air-massage-icon.jpg"),
      projectName: "SkyBnB",
      projectDesc: "A 2-week JavaScript project at App Academy based on AirBnB",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://peang-api-project.onrender.com/"
        },
        {
          name: "Github Repo",
          url: "https://github.com/pingno/API-Project"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+4699513779",
  email_address: "pngo93@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
