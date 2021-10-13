import React from "react";
import { REL, TARGET_BLANK } from "../../constants/constants";
import { ISocialMediaFooterComponent } from "./InterfaceFooter";
import classes from "./styles/socialmedia.module.css";

const SocialMediaFooterComponent = ({
  socialMedias,
}: ISocialMediaFooterComponent): JSX.Element => {
  return (
    <div className={classes.socialMediaContainer}>
      <div className={classes.socialMediaIcons}>
        {socialMedias.map(({ url, icon, name }) => (
          <a href={url} key={url} target={TARGET_BLANK} rel={REL}>
            <img src={"/socialmedia/" + icon} alt={name} />
          </a>
        ))}
      </div>
      <p>2021 by Alkemy.All Rights Reserved.</p>
    </div>
  );
};

export default SocialMediaFooterComponent;
