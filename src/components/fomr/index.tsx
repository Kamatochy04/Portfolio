import React, { useEffect } from "react";
import { Input } from "../../shared/input";
import AOS from "aos";
import Button from "../../shared/button/Button";
import { FormCard } from "../formCard/index";

import "./index.scss";

export const Form = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {" "}
      <form
        action=""
        className="form"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <div className="form__box">
          <div className="form__inputs">
            <div className="form__text">
              Name
              <Input placeholder="name" />
            </div>
            <div className="form__text">
              Phone
              <Input placeholder="Phone" />
            </div>
          </div>
          <div className="form__text-second">
            Message
            <textarea
              placeholder="enter your message"
              className="form__area"
              name=""
              id=""
            ></textarea>
          </div>
          <Button text="Send message" />
        </div>
        <FormCard />
      </form>
    </>
  );
};
