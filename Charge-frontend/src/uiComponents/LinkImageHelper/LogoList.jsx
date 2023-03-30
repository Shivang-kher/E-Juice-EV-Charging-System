import React from "react";

import LinkImage from "./LinkImage";

import logo from "../../assets/ieee_vit_logo.svg";
import FacebookIcon from "../../assets/facebook_logo.svg";
import LinkedInIcon from "../../assets/linkedin_logo.svg";
import GitHubIcon from "../../assets/github_logo.svg";
import InstagramIcon from "../../assets/insta_logo.svg";
import TwitterIcon from "../../assets/twitter_logo.svg";
import MailIcon from "../../assets/mail_logo.svg";

const Link = "";
const facebookLink = "";
const instagramLink = "";
const githubLink = "";
const twitterLink = "";
const linkedinLink = "";
const mailLink = "";

const ME = () => {
    return (
      <div>
        <LinkImage
          link={Link}
          img={logo}
          linkClass="ieee-link"
          imgClass="ieee-img"
        />
      </div>
    );
}
const Instagram = () => {
  return (
    <div>
      <LinkImage
        link={instagramLink}
        img={InstagramIcon}
        linkClass="instagram-link"
        imgClass="instagram-img"
      />
    </div>
  );
};
const Twitter = () => {
  return (
    <div>
      <LinkImage
        link={twitterLink}
        img={TwitterIcon}
        linkClass="twitter-link"
        imgClass="twitter-img"
      />
    </div>
  );
};

const Github = () => {
  return (
    <div>
      <LinkImage
        link={githubLink}
        img={GitHubIcon}
        linkClass="github-link"
        imgClass="github-img"
      />
    </div>
  );
};

const LinkedIn = () => {
  return (
    <div>
      <LinkImage
        link={linkedinLink}
        img={LinkedInIcon}
        linkClass="linkedin-link"
        imgClass="linkedin-img"
      />
    </div>
  );
};

const Facebook = () => {
  return (
    <div>
      <LinkImage
        link={facebookLink}
        img={FacebookIcon}
        linkClass="facebook-link"
        imgClass="facebook-img"
      />
    </div>
  );
};

const Mail = () => {
  return (
    <div>
      <LinkImage
        link={mailLink}
        img={MailIcon}
        linkClass="mail-link"
        imgClass="mail-img"
      />
    </div>
  );
};

export {ME, Instagram, Twitter, Github, LinkedIn, Facebook, Mail};
