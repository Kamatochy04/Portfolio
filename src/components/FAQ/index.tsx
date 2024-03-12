import React, { useEffect } from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import AOS from "aos";

import "./index.scss";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad tempora culpa eos nemo ipsum, neque assumenda rerum commodi perferendis, praesentium, debitis in necessitatibus dicta iusto exercitationem illo quisquam quis!
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <h3
        className="faq__title"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        What are HTML, CSS and JavaScript and how do they interact?
      </h3>
    ),
    children: (
      <p className="faq__text" data-aos="zoom-in" data-aos-duration="500">
        HTML (HyperText Markup Language) is a markup language that is used to
        create the structure of a web page. CSS (Cascading Style Sheets) is a
        style language that defines the appearance of elements on a web page.
        JavaScript is a programming language that allows you to add
        interactivity to a web page. Together they form the basis for creating
        the user interface of a web application.
      </p>
    ),
  },
  {
    key: "2",
    label: (
      <h3
        className="faq__title"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        What are the basic principles of responsive design?
      </h3>
    ),
    children: (
      <p className="faq__text" data-aos="zoom-in" data-aos-duration="500">
        Basic principles of responsive design include the use of media queries,
        a flexible grid, and relative units of measurement (such as percentages
        or ems). These principles allow you to create web pages that can display
        correctly on a variety of devices and screens, enhancing the user
        experience.
      </p>
    ),
  },
  {
    key: "3",
    label: (
      <h3
        className="faq__title"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        What is AJAX and how is it used in frontend development?
      </h3>
    ),
    children: (
      <p className="faq__text" data-aos="zoom-in" data-aos-duration="500">
        AJAX (Asynchronous JavaScript and XML) is a technology that allows you
        to update the content of a web page without having to reloading the
        entire page. AJAX is used to send asynchronous requests to the server
        and updating data on the page without reloading. This allows you to
        create more dynamic and responsive web applications.
      </p>
    ),
  },
  {
    key: "4",
    label: (
      <h3
        className="faq__title"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="700"
      >
        What tools and technologies do you use?
      </h3>
    ),
    children: (
      <p className="faq__text" data-aos="zoom-in" data-aos-duration="500">
        To optimize the performance of web applications, you can use tools and
        technologies such as compression and minification of CSS and JavaScript
        files, image optimization, client-side resource caching, asynchronous
        loading of scripts, use of CDN (Content Delivery Network), etc. These
        techniques help speed up page loading and improve user experience.
      </p>
    ),
  },
  {
    key: "5",
    label: (
      <h3
        className="faq__title"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="900"
      >
        What accessibility principles are important when developing web
        applications?
      </h3>
    ),
    children: (
      <p className="faq__text" data-aos="zoom-in" data-aos-duration="500">
        When developing web applications, it is important to consider
        accessibility principles to ensure equal access to information and
        functionality for all users, including people with disabilities.
        Accessibility principles include the use of semantic HTML, proper use of
        alt text for images, keyboard navigation, color contrast, and other
        aspects that make the site easier for all users to use.
      </p>
    ),
  },
  {
    key: "6",
    label: (
      <h3
        className="faq__title"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="1100"
      >
        What security methods should be used in frontend development?
      </h3>
    ),
    children: (
      <p className="faq__text" data-aos="zoom-in" data-aos-duration="500">
        When frontend development, you should take into account security
        measures, such as validating user input, protecting against XSS
        (Cross-Site Scripting) and CSRF (Cross-Site Request Forgery) attacks,
        using the HTTPS protocol to protect transmitted data, updating
        dependencies and libraries to the latest versions, as well as other
        methods to prevent vulnerabilities and ensure application security.
      </p>
    ),
  },
  {
    key: "7",
    label: (
      <h3
        className="faq__title"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="1300"
      >
        What testing tools and techniques do you use?
      </h3>
    ),
    children: (
      <p className="faq__text" data-aos="zoom-in" data-aos-duration="500">
        To test frontend applications, you can use tools such as Jest, Mocha,
        Karma for unit testing JavaScript code, Selenium WebDriver for automated
        UI testing, Lighthouse for analyzing web page performance and
        accessibility, as well as other tools to ensure code quality and
        application functionality . Testing plays an important role in frontend
        application development, helping to identify errors and improve the
        quality of the product.
      </p>
    ),
  },
];

const FAQ: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Collapse
      expandIcon={({ isActive }) => (
        <CaretRightOutlined
          rotate={isActive ? 90 : 0}
          style={{ fontSize: "24px", color: "#00e1ff" }}
        />
      )}
      accordion
      items={items}
      size="large"
      className="faq__index"
      bordered={false}
      expandIconPosition="end"
    />
  );
};

export default FAQ;
