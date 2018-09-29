import React from "react";

const Image = prop => {
  return (
    <div>
      <img src={prop.myImage} alt="" width="800" height="600" />
    </div>
  );
};

export default Image;
