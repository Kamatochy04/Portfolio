import React, { useEffect } from "react";
import AOS from "aos";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Section from "../components/section/Section";
import Container from "../components/container/Container";
import FlexContainer from "../shared/flexContainer/FlexContainer";
import H1 from "../shared/h1/H1";
import P from "../shared/P/P";
import Button from "../shared/button/Button";
import H2 from "../shared/h2/H2";
import Carousel from "../components/carousel";
import { Form } from "../components/fomr";

const headerLinksName = ["first   ", "second", "third", "fourth", "fivth"];

const ServisecPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header headerLinksName={headerLinksName} />
      <Section className="main" id="main">
        <Container>
          <FlexContainer className="main__container-left main__container">
            <H1
              text="A'm Fronted defeloper from grodno"
              dataAos="fade-up"
              dataAosDuration="1000"
              dataAosDelay="300"
            />
            <P
              className=" text text__left"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, molestiae provident. Numquam unde molestiae, aliquam, possimus non veritatis incidunt similique eaque provident voluptatem obcaecati velit nesciunt ut voluptas, porro architecto!"
              dataAos="fade-up"
              dataAosDuration="1000"
              dataAosDelay="400"
            />
            <Button
              text="Заказать разработку сайта"
              dataAos="fade-up"
              dataAosDuration="1000"
              dataAosDelay="500"
            />
            {/* <Buttons /> */}
          </FlexContainer>
        </Container>
      </Section>

      <Footer />
    </>
  );
};

export default ServisecPage;
