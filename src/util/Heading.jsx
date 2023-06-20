import React from 'react';
import styles from "./Heading.module.css"

function Heading({ heading, subheading }) {
  return (
    <div className={styles.heading}>
      <h3 style={{margin:0}}>{heading}</h3>
      <h6 style={{margin:0}}>{subheading}</h6>
    </div>
  );
}

export default Heading;
