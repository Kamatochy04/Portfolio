import React from "react";
import P from "../../shared/P/P";

import "./BlogCard.scss";

interface IBlogCard {
  dataAos?: string;
  dataAosDuration?: string;
  dataAosDelay?: string;
  img?: any;
  title?: string;
  descr?: string;
  link?: string;
}

const BlogCard = ({
  dataAos,
  dataAosDuration,
  dataAosDelay,
  img,
  title,
  descr,
  link,
}: IBlogCard) => {
  return (
    <div
      className="blog__item"
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      data-aos-delay={dataAosDelay}
    >
      <div className="blog__item-img">
        <img src={img} alt="asdsada" />
      </div>
      <div className="blog__item-wrapper">
        <h3 className="blog__item-title">{title}</h3>
        <p className="blog__item-text">{descr}</p>

        <a href={link}>
          <button className="blog__item-btn">Subscribe</button>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
