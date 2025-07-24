import React from "react";
import styles from "./FloatingGeomatricShapes.module.css";

function FloatingGeomatricShapes() {
  const array = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className={styles["floating-shapes"]}>
        {array.map((elt, i) => (
          <div key={i + 1} className={styles[`shape-${i + 1}`]}></div>
        ))}
      </div>
    </>
  );
}

export default FloatingGeomatricShapes;
