import { styles } from "ansi-colors";
import React from "react";
import sytlesSheet from "./Image.module.css";
import img from "./Yen.jpg";

function image() {
  return (
    <div className={sytlesSheet.all}>
      <img className={sytlesSheet.image} src={img} alt="404" />
      <h1 className={sytlesSheet.name}>Yen Kuo</h1>
      <a className={sytlesSheet.email} href="mailto:kuoyen5@gmail.com">
        kuoyen5@gmail.com
      </a>
    </div>
  );
}

export default image;
