import React, { useState, useEffect } from "react";
import {
  firstHalfOptionsFooter,
  SecondHalftOptionsFooter,
  socialMedias,
} from "../../constants/constants";
import LogoAndOptionFooterComponent from "./LogoAndOptionFooterComponent";
import SocialMediaFooterComponent from "./SocialMediaFooterComponent";
import classes from "./styles/indexfooter.module.css";
import { getTestimonialsPublic } from "../../services/testimonialsService";

const Footer = (): JSX.Element | null => {
  const [social, setSocial] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const data = await getTestimonialsPublic(1);
        setSocial(data.data.social);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  if (social.length === 0) return null;
  return (
    <footer className={classes.footerContainer}>
      <LogoAndOptionFooterComponent
        firstHalfOptionsFooter={firstHalfOptionsFooter}
        SecondHalftOptionsFooter={SecondHalftOptionsFooter}
      />
      {/* <SocialMediaFooterComponent socialMedias={socialMedias} /> */}
      <SocialMediaFooterComponent socialMedias={social} />
    </footer>
  );
};

export default Footer;
