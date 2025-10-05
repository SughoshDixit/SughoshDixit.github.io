/* Change this file to get your personal Portfolio */

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
  title: "नमस्ते, Sughosh here",
  subTitle: emoji(
    "🧠 Data Scientist at Oracle Financial Crime & Compliance | 🎵 Bhajan Singer & Patriotic Music Enthusiast | ⚽ Passionate Footballer & Liverpool FC Devotee | 🇮🇳 Proud Indian Nationalist & Civilizational Heritage Advocate | 🎓 Masters in Data Science from BITS Pilani | Building AI-driven solutions while preserving Bharatiya culture & values 🌏🏆"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Do_Aj8ruhq64P7Enq4giaJhtXpRcsHG2/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true

  // Multi-Identity Visual Showcase
  identityShowcase: {
    display: true,
    identities: [
      {
        icon: "🧠",
        title: "Data Scientist",
        description: "Transforming data into insights at Oracle Financial Crime & Compliance",
        color: "#007ACC",
        experience: "4+",
        level: "Expert",
        progress: 95,
        tags: ["AI/ML", "Python", "SQL", "Analytics"],
        achievements: [
          "Built ML models for fraud detection",
          "Led data extraction for Oracle Cloud HCM",
          "Masters in Data Science from BITS Pilani"
        ],
        currentFocus: "Developing advanced AI models for financial crime prevention and anti-money laundering systems",
        philosophy: "Data is the new oil, but insights are the refined fuel that drives innovation"
      },
      {
        icon: "🎵",
        title: "Musician",
        description: "Devotional singer preserving Bharatiya musical traditions",
        color: "#FFD700",
        experience: "10+",
        level: "Master",
        progress: 90,
        tags: ["Bhajans", "Patriotic", "Classical", "Spiritual"],
        achievements: [
          "Weekly bhajan performances",
          "Patriotic song renditions",
          "Preserving cultural heritage through music"
        ],
        currentFocus: "Learning Vedas and expanding repertoire of spiritual and patriotic compositions",
        philosophy: "Music is the universal language that connects souls and preserves our cultural essence"
      },
      {
        icon: "⚽",
        title: "Footballer",
        description: "Passionate striker with offensive mindset and Liverpool FC devotion",
        color: "#228B22",
        experience: "15+",
        level: "Advanced",
        progress: 85,
        tags: ["Striker", "Liverpool FC", "Strategy", "Teamwork"],
        achievements: [
          "Offensive footballer with goal-scoring mindset",
          "Liverpool FC devotee and analyst",
          "Team leadership and strategy"
        ],
        currentFocus: "Improving tactical awareness and contributing to team success on and off the field",
        philosophy: "Football teaches us that individual brilliance means nothing without team unity and collective purpose"
      },
      {
        icon: "🇮🇳",
        title: "Nationalist",
        description: "Proud advocate of Bharatiya civilization and cultural heritage",
        color: "#55198b",
        experience: "Life",
        level: "Devoted",
        progress: 90,
        tags: ["Heritage", "Culture", "Civilization", "Pride"],
        achievements: [
          "Advocate for Bharatiya civilizational values",
          "Working to eradicate colonial consciousness",
          "Proud of ancient Indian heritage"
        ],
        currentFocus: "Rebuilding the sense of being a Bharateeya and preserving our civilizational wisdom",
        philosophy: "True nationalism is not about being against others, but about being proud of our own magnificent heritage"
      }
    ]
  }
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
  title: "My Four Pillars of Identity",
  subTitle: "🧠 Data Scientist | 🎵 Musician | ⚽ Footballer | 🇮🇳 Indian Nationalist",
  skills: [
    emoji(
      "🧠 Data Scientist - Transforming complex data into actionable insights at Oracle Financial Crime & Compliance using AI/ML"
    ),
    emoji(
      "🎵 Musician - Devotional singer performing bhajans and patriotic songs, preserving Bharatiya musical traditions"
    ),
    emoji(
      "⚽ Footballer - Passionate striker with offensive mindset, Liverpool FC devotee, believer in teamwork and glory"
    ),
    emoji(
      "🇮🇳 Indian Nationalist - Proud advocate of Bharatiya civilization, working to eradicate colonial consciousness and rebuild cultural pride"
    ),
    emoji(
      "🎓 Academic Excellence - Masters in Data Science & Engineering from BITS Pilani with Army family discipline"
    ),
    emoji(
      "🏗️ Tech Innovator - Building transformative applications with modern tech stack while honoring traditional values"
    )
  ],

  /* Multi-Identity Software Skills with Enhanced Icons */
softwareSkills: [
    {
      skillName: "Data Science & ML",
      fontAwesomeClassname: "fas fa-robot",
      color: "#007ACC"
    },
    {
      skillName: "Python & AI",
      fontAwesomeClassname: "fab fa-python",
      color: "#3776ab"
    },
    {
      skillName: "SQL & Analytics",
      fontAwesomeClassname: "fas fa-database",
      color: "#336791"
    },
    {
      skillName: "React & Frontend",
      fontAwesomeClassname: "fab fa-react",
      color: "#61dafb"
    },
    {
      skillName: "Oracle Cloud",
      fontAwesomeClassname: "fas fa-cloud",
      color: "#f80000"
    },
    {
      skillName: "Music & Bhajans",
      fontAwesomeClassname: "fas fa-music",
      color: "#FFD700"
    },
    {
      skillName: "Football Strategy",
      fontAwesomeClassname: "fas fa-futbol",
      color: "#228B22"
    },
    {
      skillName: "Indian Heritage",
      fontAwesomeClassname: "fas fa-om",
      color: "#FF9933"
    }
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
  title: "Multi-Dimensional Expertise",
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    { Stack: "🧠 Data Science & AI/ML", progressPercentage: "95%" },
    { Stack: "🎵 Musical Performance & Cultural Arts", progressPercentage: "90%" },
    { Stack: "⚽ Football Strategy & Leadership", progressPercentage: "85%" },
    { Stack: "🇮🇳 Cultural Heritage & Nationalist Thought", progressPercentage: "90%" },
    { Stack: "💻 Full-Stack Development", progressPercentage: "80%" },
    { Stack: "🔒 Financial Crime Detection Systems", progressPercentage: "88%" }
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
  
  // Data Visualization Configuration
  dataVisualization: {
    display: true,
    type: "bar", // "bar", "pie", "radar"
    data: [
      { name: "Data Science", value: 95, icon: "🧠", color: "#007ACC" },
      { name: "Music & Arts", value: 90, icon: "🎵", color: "#FFD700" },
      { name: "Football", value: 85, icon: "⚽", color: "#228B22" },
      { name: "Cultural Heritage", value: 90, icon: "🇮🇳", color: "#55198b" },
      { name: "Full-Stack Dev", value: 80, icon: "💻", color: "#61dafb" },
      { name: "Financial Systems", value: 88, icon: "🔒", color: "#28A745" }
    ]
  }
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
      projectDesc: "A comprehensive 3D printing platform that revolutionizes manufacturing processes through advanced analytics and automation.",
      category: "3D Printing",
      technologies: ["React", "Node.js", "Python", "MongoDB", "AWS"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://printalytix.com/"
        }
      ]
    },
    {
      image: require("./assets/images/siemens.jfif"),
      projectName: "Siemens - Project Chanakya",
      projectDesc: "Led development of a comprehensive lead generation system for industrial automation solutions, improving lead conversion by 40%.",
      category: "Industrial Automation",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://siemens.com/"
        }
      ]
    },
    {
      image: require("./assets/images/oracle.jfif"),
      projectName: "Oracle Cloud HCM Analytics",
      projectDesc: "Developed advanced analytics dashboard for Oracle Cloud HCM, providing insights into workforce trends and performance metrics.",
      category: "Cloud Analytics",
      technologies: ["Oracle Analytics", "SQL", "Python", "Tableau", "Oracle Cloud"],
      footerLink: [
        {
          name: "Learn More",
          url: "https://oracle.com/"
        }
      ]
    },
    {
      image: require("./assets/images/paniit.png"),
      projectName: "Alphers - Education Monitoring",
      projectDesc: "AI-powered early age education monitoring application that tracks learning progress and provides personalized recommendations.",
      category: "EdTech",
      technologies: ["React Native", "Python", "TensorFlow", "Firebase", "Machine Learning"],
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/SughoshDixit9"
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
    "Tech Insights & Innovation - Discover insights, tutorials, and thoughts on technology, data science, and innovation",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://sughoshblog.vercel.app/blogs/gratitude-for-being-born-in-the-ancient-civilization-of-bharatavarsha",
      title: "Gratitude for Being Born in the Ancient Civilization of Bharatavarsha",
      description:
        "Starting with gratitude by giving salutations to Lord Ganesha - reflections on our rich civilizational heritage."
    },
    {
      url: "https://sughoshblog.vercel.app/blogs/reflections-from-the-akhila-bharateeya-pratinidhi-sabha-2025",
      title: "Reflections from the Akhila Bharateeya Pratinidhi Sabha 2025",
      description:
        "My experience at the 100th year of RSS as a Prabandhak - insights on leadership and service."
    },
    {
      url: "https://sughoshblog.vercel.app/blogs/a-heartfelt-ode-and-a-tribute-to-ajjju",
      title: "A heartfelt Ode and a Tribute to Ajjju",
      description:
        "Lifestory of Ajju - a touching tribute to a beloved grandfather and brave heart."
    },
    {
      url: "https://sughoshblog.vercel.app/blogs/india-in-a-shifting-global-order-book-notes",
      title: "India in a Shifting Global Order — Book Notes",
      description:
        "A blurb of a book on the Indian Perspective in the current world - insights on geopolitics and foreign policy."
    },
    {
      url: "https://sughoshblog.vercel.app/blogs/five-years-at-oracle:-from-cloud-analyst-to-data-scientist",
      title: "Five Years at Oracle: From Cloud Analyst to Data Scientist",
      description:
        "My journey at Oracle from being a fresh hire to becoming a Data Scientist - career milestones and growth."
    },
    {
      url: "https://sughoshdixit.blogspot.com/p/being-ardent-liverpool-fan-i-can-tell.html",
      title: "Do you watch football?",
      description:
        "A reflection on why I chose to support Liverpool, even when they weren't at their peak."
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

// GitHub Projects Section

const githubProjectsSection = {
  title: emoji("GitHub Projects 💻"),
  subtitle: "Explore my latest repositories and contributions on GitHub",
  username: "SughoshDixit", // Your GitHub username
  repoCount: 8, // Number of repositories to display
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Let's Collaborate and Build Innovative Solutions!😬 ",
  number: "+91-8310080859",
  email_address: "sughoshpdixit@gmail.com"
};

// YouTube gallery section.  This displays videos from your channel.
const youtubeSection = {
  title: "YouTube Gallery",
  subtitle: "Latest uploads from my YouTube channel",
  channelHandle: "sughoshdixit", // your channel handle without '@'
  videoIds: [
    "vX5sqN4Wl78", // Video 1
    "rrbSLCis0QY", // Video 2
    "u1PtafSwvwg", // Video 3
    "yXQAM2jsYgA"  // Video 4
  ], // optional: provide an array of video IDs to display specific videos
  display: true
};

// AI gallery section.  Populate `items` with your images and videos.
const aiGallerySection = {
  title: "AI Gallery",
  subtitle: "A collection of AI‑generated images and videos showcasing creative possibilities",
  items: [
    {
      type: "image",
      original: "/ai-gallery/2025myyear.jpg",
      description: "AI-generated image celebrating the year 2025"
    },
    {
      type: "image",
      original: "/ai-gallery/knee slide.jpg",
      description: "Dynamic knee slide celebration captured with AI enhancement"
    },
    {
      type: "image",
      original: "/ai-gallery/LFC.jpg",
      description: "Liverpool FC themed AI-generated artwork"
    },
    {
      type: "image",
      original: "/ai-gallery/out-0 (13).webp",
      description: "Creative AI output exploring abstract forms and patterns"
    },
    {
      type: "image",
      original: "/ai-gallery/out-0 (25).webp",
      description: "AI-generated visual experiment with geometric compositions"
    },
    {
      type: "image",
      original: "/ai-gallery/out-0 (3).webp",
      description: "Innovative AI creation featuring unique digital textures"
    },
    {
      type: "image",
      original: "/ai-gallery/out-0 (4).webp",
      description: "Abstract AI artwork with vibrant color combinations"
    },
    {
      type: "image",
      original: "/ai-gallery/out-0 (8).webp",
      description: "Creative AI output showcasing digital artistry"
    },
    {
      type: "image",
      original: "/ai-gallery/out-0_(8)_resized_672c4aaf4a931.webp",
      description: "Resized AI creation highlighting intricate details"
    },
    {
      type: "image",
      original: "/ai-gallery/replicate-prediction-4mn4aj1e1srm80cm61n8snkckc.jpg",
      description: "AI prediction visualization with complex neural network patterns"
    },
    {
      type: "image",
      original: "/ai-gallery/replicate-prediction-ateaxrpc99rme0ck9sj83gd32w.jpg",
      description: "Replicate AI model output featuring organic forms"
    },
    {
      type: "image",
      original: "/ai-gallery/replicate-prediction-paaxr2r019rma0cksww87rz9ew.jpg",
      description: "AI-generated content exploring spatial relationships"
    },
    {
      type: "image",
      original: "/ai-gallery/replicate-prediction-v9z1mygethrm80cm8qba13d1g0.jpg",
      description: "Advanced AI prediction showcasing detailed textures"
    },
    {
      type: "image",
      original: "/ai-gallery/RM-5.jpg",
      description: "Creative AI artwork with RM-5 designation"
    },
    {
      type: "image",
      original: "/ai-gallery/WhatsApp Image 2025-03-04 at 11.42.56.jpeg",
      description: "WhatsApp captured moment enhanced with AI processing"
    }
  ],
  display: true
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
  githubProjectsSection,
  youtubeSection,
  aiGallerySection,
  contactInfo,
  twitterDetails,
  isHireable
};
