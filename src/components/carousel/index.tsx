import React, { useState } from "react";
import type { CarouselProps, RadioChangeEvent } from "antd";
import { Carousel as AntCarousel, Radio } from "antd";
import { Preview } from "../preview/index";

type DotPosition = CarouselProps["dotPosition"];

const Carousel: React.FC = () => {
  const [dotPosition, setDotPosition] = useState<DotPosition>("bottom");

  const handlePositionChange = ({ target: { value } }: RadioChangeEvent) => {
    setDotPosition(value);
  };

  return (
    <>
      <AntCarousel autoplay={true} dotPosition={dotPosition}>
        <Preview
          title={"One page site"}
          text={
            "A one-page website specifically designed to attract and hold the attention of visitors and encourage action, such as filling out a form, making a purchase, or signing up for a newsletter."
          }
          price={"100"}
        />
        <Preview
          title={"Online store"}
          text={
            "Online store development is the creation of a functional web space that allows you to sell goods or services online. By ordering the development of an online store from the Abeslab web design studio, you get a powerful tool for increasing sales, attracting new customers and expanding your business."
          }
          price={"300"}
        />
        <Preview
          title={"Page-proofs"}
          text={
            "It is a structured combination of images, headings, subheadings, tables, infographics, text and other elements on a page using HTML markup language and CSS page appearance language."
          }
          price={"50"}
        />
        <Preview
          title={"Landing page"}
          text={
            "A landing page is a standalone web page that a person 'lands' on after clicking through from an email, ad, or other digital location. Every content strategy should include the use of landing pages to convert more traffic and increase conversions."
          }
          price={"100"}
        />
      </AntCarousel>
    </>
  );
};

export default Carousel;
