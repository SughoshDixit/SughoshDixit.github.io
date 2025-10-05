import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import GitHubProjects from "../components/GitHubProjects";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import YoutubeGallery from "../components/YoutubeGallery";
import AIGallery from "../components/AIGallery";
import ContactForm from "../components/contactForm/ContactForm";
import AnimatedSkills from "../components/animatedSkills/AnimatedSkills";
import ProjectShowcase from "../components/projectShowcase/ProjectShowcase";
import IdentityCards from "../components/identityCards/IdentityCards";
import {splashScreen, youtubeSection, aiGallerySection, skillsSection, bigProjects, githubProjectsSection, greeting} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <IdentityCards identities={greeting.identityShowcase.identities} />
            <AnimatedSkills skills={skillsSection.softwareSkills} />
            <Education />
            <WorkExperience />
            <ProjectShowcase projects={bigProjects.projects} />
            <Projects />
            <StartupProject />
            <Achievement />
            <Blogs />
            <Talks />
            <Twitter />
            <GitHubProjects section={githubProjectsSection} />
            <YoutubeGallery section={youtubeSection} />
            <AIGallery section={aiGallerySection} />
            <ContactForm />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
