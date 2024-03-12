import React, { useEffect, useTransition } from "react";
import AOS from "aos";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Container from "../components/container/Container";
import Section from "../components/section/Section";
import FlexContainer from "../shared/flexContainer/FlexContainer";
import H1 from "../shared/h1/H1";
import P from "../shared/P/P";
import Social from "../components/social/Social";
import Buttons from "../components/buttons/Buttons";
import H2 from "../shared/h2/H2";
import H3 from "../shared/h3/H3";
import BlogCard from "../components/blogCard/BlogCard";

import LogoTG from "./img/mainPage/LOGO-1.png";
import LogoTG2 from "./img/mainPage/LOGO-2.png";
import me from "./img/mainPage/me.png";
import ExperienceBlog from "../components/experienceBlog/ExperienceBlog";

import FAQ from "../components/FAQ";
import SkillsBox from "../components/skillsBox";
import Progress from "../components/progress";
import { useTranslation } from "react-i18next";

import "./styles/index.scss";
import Carousel from "../components/carousel";
import { Form } from "../components/fomr";

const headerLinksName = [
  "main",
  "about",
  "skills",
  "blogs",
  "experience",
  "services",
  "faq",
];

const MainPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href*="#"].link');

    anchors.forEach((anchor) => {
      anchor.addEventListener(
        "click",
        (event: { preventDefault: () => void }) => {
          event.preventDefault();
          const blockID = anchor.getAttribute("href");

          if (blockID) {
            const targetBlock = document.querySelector<HTMLElement>(blockID);

            if (targetBlock) {
              targetBlock.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }
        }
      );
    });
  }, []);

  return (
    <>
      <Header headerLinksName={headerLinksName} />
      <Section className="main" id="main">
        <Container>
          <FlexContainer className="main__container">
            <H1
              text="Hi, I am Fronted defeloper "
              dataAos="fade-up"
              dataAosDuration="1000"
              dataAosDelay="300"
            />
            <P
              className=" text text__center"
              text="Here I share my projects, ideas and passion for web development. I also have an excellent team that will help you with the development of high-quality web applications. Welcome to the world of my creativity!"
              dataAos="fade-up"
              dataAosDuration="1000"
              dataAosDelay="400"
            />
            <Social
              dataAos="fade-up"
              dataAosDuration="800"
              dataAosDelay="700"
            />
            <Buttons
              buttonText1="About me"
              buttonText2="My Blog"
              href="#about"
              href2="#blogs"
            />
          </FlexContainer>
        </Container>
      </Section>
      <Section className="section about" id="about">
        <Container>
          <H2
            text="About me"
            dataAos="zoom-in"
            dataAosDuration="800"
            dataAosDelay="100"
          />
          <FlexContainer className="about__wrapper">
            <FlexContainer className="about__descr">
              <H3
                text="
My name is Andrey Valyuk"
                dataAos="fade-left"
                dataAosDuration="500"
              />
              <P
                text="I'm a front-end developer. I started developing in 2020 by taking courses on the udemy platform. I started my journey by developing simple websites and then began to study Java Script. Then I switched to freelancing and gained some commercial experience. Now I actively developing two telegram channels about programming (Just frontend, Just about books) in which I talk about front-end development and share experiences from books on programming. If you are interested in me, you can write to me, my contacts are at the bottom of the site."
                dataAos="fade-left"
                dataAosDuration="500"
                dataAosDelay="200"
                className="text__second text__second-left"
              />
              <Buttons
                className="about__buttons"
                buttonText1="Skills"
                buttonText2="Experience"
                href="#skills"
                href2="#experience"
              />
            </FlexContainer>
            <div className="about__img">
              <img
                src={me}
                alt="My thubnail"
                data-aos="fade-left"
                data-aos-duration="1500"
              />
            </div>
          </FlexContainer>
        </Container>
      </Section>
      <Section className="section skills" id="skills">
        <H2
          text="My skills"
          dataAos="zoom-in"
          dataAosDuration="800"
          dataAosDelay="100"
        />
        <Container>
          <FlexContainer className="skills__box">
            <SkillsBox
              name="Programming methodologies"
              items={["BEM", "OOP", "SOLID", "JDBC"]}
            />
            <SkillsBox
              name="Programming Patterns"
              items={["MVC", "MVVM", "Clean Architecture"]}
            />
            <SkillsBox name="Version control system" items={["Git"]} />
            <SkillsBox
              name="Programming languages"
              items={["C#", "JavaScript", "TypeScript"]}
            />
            <SkillsBox
              name="Libraries"
              items={[
                "AOS",
                "Axios",
                "ReactJS",
                "Redux",
                "Ant",
                "Bootstrap",
                "jQuery",
              ]}
            />
            <SkillsBox
              name="Frameworks"
              items={[" Material UI", "Express.js"]}
            />
            <SkillsBox
              name="Other"
              items={[
                "English - B1 ",
                "German - A2",
                "FSD",
                "GitHub",
                "Node.js",
                "Prisma",
              ]}
            />
          </FlexContainer>
        </Container>
      </Section>
      <Section className="section soft">
        <H2
          text="Soft skills"
          dataAos="zoom-in"
          dataAosDuration="800"
          dataAosDelay="100"
        />
        <Container>
          <FlexContainer className="softskils">
            <span>
              <Progress percent={78} />
              Communication
            </span>
            <span>
              <Progress percent={57} />
              Adaptability
            </span>
            <span>
              <Progress percent={88} />
              Time management
            </span>
            <span>
              <Progress percent={61} />
              Disciplined
            </span>
          </FlexContainer>
        </Container>
      </Section>
      <Section className="section about" id="blogs">
        <Container>
          <H2
            text="My blogs"
            dataAos="zoom-in"
            dataAosDuration="800"
            dataAosDelay="100"
          />
          <FlexContainer className="blog">
            <BlogCard
              dataAos="flip-left"
              dataAosDuration="1000"
              dataAosDelay="400"
              img={LogoTG2}
              title="Просто Frontend"
              descr=" Here you will find reviews, recommendations and discussions of the most relevant and useful books about programming. Learn about new technologies, development methods and best IT practices. "
              link="https://t.me/prostoAboutBook"
            />
            <BlogCard
              dataAos="flip-left"
              dataAosDuration="1000"
              dataAosDelay="900"
              img={LogoTG}
              title="Просто о книгах"
              descr="
              In this channel, you will learn about the latest trends in front-end development, best practices in creating user interfaces, and technologies that will help you become a successful front-end developer. "
              link="https://t.me/prostoFront"
            />
          </FlexContainer>
        </Container>
      </Section>
      <Section className=" section" id="services">
        <H2
          text="Services"
          dataAos="zoom-in"
          dataAosDuration="800"
          dataAosDelay="100"
        />
        <Carousel />
      </Section>
      <Section className="section about" id="experience">
        <Container>
          <H2
            text="My Experience"
            dataAos="zoom-in"
            dataAosDuration="800"
            dataAosDelay="100"
          />
          <ExperienceBlog />
        </Container>
      </Section>
      <Section className="section faq" id="faq">
        <Container>
          <H2
            text="FAQ"
            dataAos="zoom-in"
            dataAosDuration="800"
            dataAosDelay="100"
          />
          <FAQ />
        </Container>
      </Section>
      {/* <Section className="section" id="contact">
        <Container>
          <H2
            text="Contact"
            dataAos="zoom-in"
            dataAosDuration="800"
            dataAosDelay="100"
          />
          <Form />
        </Container>
      </Section> */}
      <Footer />
    </>
  );
};

export default MainPage;
