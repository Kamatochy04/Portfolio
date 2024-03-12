import React, { useEffect } from "react";
import AOS from "aos";

import "./experianceBlog.scss";

const ExperienceBlog = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="experience">
      <div className="experience__colum" data-aos="fade-up">
        <div
          className="experience__item"
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-delay="200"
        >
          <h3 className="experience__title">Practical JavaScript</h3>
          <span>December 2023 - february 2024</span>
          <p className="experience__descr">
            In-depth study of JS, familiarity with server technologies, working
            with asynchronous code. Analysis of technical specifications of real
            projects and development of knowledge in practice
          </p>
        </div>
        <div
          className="experience__item"
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-delay="700"
        >
          {" "}
          <h3 className="experience__title">
            Node.js - Complete course on Node.js
          </h3>
          <span>October 2023 - February 2024</span>
          <p className="experience__descr">
            Learned the internal structure of Node.js and learned to use NPM,
            http, stream, events modules, as well as Express
          </p>
        </div>

        <div
          className="experience__item"
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          {" "}
          <h3 className="experience__title">Web developer</h3>
          <span>June 2022 - October 2022</span>
          <p className="experience__descr">
            Immersion in the profession of web developer. Study of basic
            concepts and terms. Introduction to HTML, CSS, SCSS, Gulp. A large
            amount of practice and creation of the first pet projects
          </p>
        </div>
      </div>
      <div className="experience__colum" data-aos="fade-up">
        <div
          className="experience__item"
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-delay="500"
        >
          <h3 className="experience__title">Freelance work</h3>
          <span>April 2023 - september 2023</span>
          <p className="experience__descr">
            Layout of websites and adapting them for mobile devices. Development
            of web applications using react.
          </p>
        </div>
        <div
          className="experience__item"
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-delay="600"
        >
          {" "}
          <h3 className="experience__title">Intensive JavaScript Dive</h3>
          <span>August 2023 - November 2023</span>
          <p className="experience__descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eum
            omnis animi debitis nostrum dolore odio amet officiis ab est
            obcaecati accusamus explicabo nam excepturi, sequi quidem, alias
            soluta hic?
          </p>
        </div>
        <div
          className="experience__item"
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          <h3 className="experience__title">
            Complete course on JavaScritp + React
          </h3>
          <span>September 2023 - december 2023</span>
          <p className="experience__descr">
            Introduction to JavaScript, React and basic concepts, application
            development in OOP style. Creating a pet project using native JS,
            creating web applications using React.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceBlog;
