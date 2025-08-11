e/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen


const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sughosh Dixit",
  title: "Namaste, Sughosh here",
  subTitle: emoji(
    "🔍 Data Scientist at Oracle Financial Crime and Compliance Management | Masters in Data Science & Engineering from BITS Pilani | Eager to solve global challenges with AI/ML! 🚀 Let's build data-driven solutions for a better tomorrow 🌍"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Do_Aj8ruhq64P7Enq4giaJhtXpRcsHG2/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SughoshDixit9",
  linkedin: "https://www.linkedin.com/in/sughosh-dixit/",
  gmail: "sughoshpdixit@gmail.com",
  gitlab: "https://gitlab.com/sughoshpdixit",
  instagram: "https://www.instagram.com/sughoshdixit/",
  medium: "https://medium.com/@sughoshpdixit",
  stackoverflow: "https://stackoverflow.com/users/11670124/sughosh-dixit",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Coding by profession 💼, Footballer by passion, Civilizationalist by ideology🔎",
  skills: [
    emoji(
      "⚡ Offensive Footballer - I believe scoring goals is the best feeling"
    ),
    emoji("⚡ Sing Patriotic Songs and Bhajans on a weekly basis"),
    emoji("⚡ Dream to eradicate Colonial Consciousness amongst people of Bharat and rebuild the sense of being a Bharateeya. Proud of my Bharateeya Civilizational heritage - rather than getting intimidated on what the so-called 'West' does"),
    emoji("⚡ A quick learner - Throw any task at me, within a week I can show progress"),
    emoji("⚡ Coming from a Defense family - have the Army mindset 🪖"),
    emoji("⚡ Aspire to build transformative web and mobile applications"),
    emoji("⚡ Let's be more informed and less opinionated 😅! ")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "oracle", fontAwesomeClassname: "fas fa-database" }, // Reflects Oracle Stack Usage
    { skillName: "Football", fontAwesomeClassname: "fas fa-futbol" }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "BITS PILANI",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Technology in Data Science and Engineering",
      duration: "September 2021 - September 2023",
      desc: "Hustled through work and studies with a focus on AI-driven projects",
      descBullets: [
        "Collaborated on cutting-edge AI/ML models"
      ]
    },
    {
      schoolName: "Bangalore Institute of Technology",
      logo: require("./assets/images/BIT.jfif"),
      subHeader: "Bachelor of Technology in Information Science and Engineering",
      duration: "September 2016 - April 2020",
      desc: "Top 10% in program, developing deep foundations in engineering",
      descBullets: ["Worked on impactful internships and hackathons"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    { Stack: "Data Science/ML", progressPercentage: "90%" },
    { Stack: "Programming", progressPercentage: "85%" },
    { Stack: "Data Analysis/Visualization", progressPercentage: "85%" }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Development intern",
      company: "Printalytix",
      companylogo: require("./assets/images/printalytix.png"),
      date: "July 2018 – September 2018",
      desc: "Worked as a design intern, participated as a guide along with senior colleagues at the aforementioned company, at Workbench Projects,Bangalore in a national level innovation competition organized by Niti-Ayog",
      descBullets: [
        "Contributed in designing BPMN (Business Process Modelling and Notation) for various different scenarios",
        "Learnt how to operate an FDM 3-D printer, learnt their working to produce some prototypes"
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Siemens",
      companylogo: require("./assets/images/siemens.jfif"),
      date: "February 2020 – May 2020",
      desc: "Worked on a Live Lead Gen Project - 'Project Chanakya'"
    },
    {
      role: "Senior Technical Cloud Analyst",
      company: "Oracle",
      companylogo: require("./assets/images/oracle.jfif"),
      date: "September 2020 – September 2024",
      desc: "Led Data Extraction and SQL Reports for Oracle Cloud HCM projects"
    },
    {
      role: "Data Scientist",
      company: "Oracle Financial Crime and Compliance Management",
      companylogo: require("./assets/images/oracle.jfif"),
      date: "October 2024 – Present",
      desc: "Building Machine Learning models to combat financial crimes and optimize Anti-Money Laundering efforts. 🌐💼",
      descBullets: [
        "Analyzing financial data for fraud detection",
        "Developing predictive models to detect suspicious transactions",
        "Collaborating with cross-functional teams for risk mitigation"
      ]
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
  title: "Big Projects",
  subtitle: "CREATING IMPACT WITH DATA-DRIVEN SOLUTIONS",
  projects: [
    {
      image: require("./assets/images/printalytix.png"),
      projectName: "Printalytix",
      projectDesc: "",
            category: "3D Printing",

      footerLink: [
        {
          name: "Visit Website",
          url: "https://printalytix.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/siemens.jfif"),
      projectName: "Siemens",
            category: "Industrial Automation",

      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://siemens.com/"
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
      title: "Top 25 Exciting Idea at PANIIT All India Hackathon",
      subtitle:
        "The project Alphers was an Early Age Education Monitoring Application",
      image: require("./assets/images/paniit.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1XjBXLgkwovXpdsEgIiO4LpzSofx96V0q/view"
        }    
      ]
    },
    {
      title: "IRJET",
      subtitle:
        "A Manuscript based on my team's Final Year Engineering Project",
      image: require("./assets/images/IRJET.jpg"),
      footerLink: [
        {
          name: "View my published paper",
          url: "https://www.irjet.net/archives/V7/i7/IRJET-V7I7285.pdf"
        }
      ]
    },

    {
      title: "Rakathon",
      subtitle: "An application to convert 2-D images to their 3-D view",
      image: require("./assets/images/Rakuten.jpg"),
      footerLink: [
        {name: "Memories", 
         url: "https://drive.google.com/file/d/1b0gMXkVoNRCR4au2hVUcAXOCoWH1h_9E/view"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt and experienced",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://sughoshdixit.blogspot.com/p/being-ardent-liverpool-fan-i-can-tell.html",
      title: "Do you watch football?",
      description:
        "A reflection on why I chose to support Liverpool, even when they weren't at their peak."
    },
    {
      url: "https://sughoshblog.vercel.app/blogs/gratitude-for-being-born-in-the-ancient-civilization-of-bharatavarsha",
      title: "Ancient Civilization of Bharatavarsha",
      description:
        "Sharing thoughts on the timeless heritage of Bharat."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Talks Sections

const talkSection = {
  title: "Hymns",
  subtitle: emoji(
    "I aspire to learn as much as Vedas in this lifetime, which is an ocean by itself"
  ),

  talks: [
    {
      title: "Rudra Chant 🙏",
      subtitle: "Rudra Namakam,",
      slides_url: "https://vignanam.org/kannada/sri-rudram-namakam.html",
      event_url: "https://youtu.be/a7IGaWRqB0c"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("An AI Generated Introduction Video 🎙️"),
  subtitle: "My very own AI clone in Video",
  podcast: [
    "https://www.youtube.com/embed/rrbSLCis0QY?si=EGn03BX5qSMNQL-o"
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Let's Collaborate and Build Innovative Solutions!😬 ",
  number: "+91-8310080859",
  email_address: "sughoshpdixit@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "PSughosh", //Replace "twitter" with your twitter username without @
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
