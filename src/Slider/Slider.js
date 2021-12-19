import React, { useEffect, useState } from "react";
import "./Slider.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import img1 from "../BannerImages/img1.png";
import img2 from "../BannerImages/img2.png";
import img4 from "../BannerImages/img4.png";

const Slider = () => {
  const bannerImages = [img1, img2, img4];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = bannerImages.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, bannerImages]);

  return (
    <div className="section">
      <div className="section-center">
        {bannerImages.map((image, indexImage) => {
          let position = "nextSlide";
          if (indexImage === index) {
            position = "activeSlide";
          }
          if (
            indexImage === index - 1 ||
            (index === 0 && indexImage === bannerImages.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={indexImage}>
              <img
                style={{ width: "200px", height: "100px" }}
                src={image}
                alt="banner_img"
              />
            </article>
          );
        })}
        <p className="prev" onClick={() => setIndex(index - 1)}>
          <ArrowBackIosIcon />
        </p>
        <p className="next" onClick={() => setIndex(index + 1)}>
          <ArrowForwardIosIcon />
        </p>
      </div>
    </div>
  );
};
export default Slider;
