import React from "react";

const LinkImage = ({ link, img, linkClass, imgClass }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`${linkClass} cursor-pointer`}
    >
      <img src={img} alt="" className={`${imgClass} cursor-pointer`} />
    </a>
  );
};

export default LinkImage;
