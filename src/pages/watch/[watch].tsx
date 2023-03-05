import React from "react";

const watch = () => {
  return (
    <div className="flex justify-center items-center">
      <video autoPlay loop muted className="h-auto w-screen">
        <source
          // src="https://cdn.pixabay.com/vimeo/581386222/ninja-83274.mp4?rendition=source&expiry=1678017782&hash=8ea2c22621967e22a579944172b344a7d292e6ad"
          src="https://cdn.pixabay.com/vimeo/662525884/anime-103434.mp4?rendition=source&expiry=1678018172&hash=5890a30998502aa12c7eb3f589ae876efa76127c"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default watch;
