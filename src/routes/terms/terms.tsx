import React from "react";

// styles
import styles from "./terms.module.scss";
import "../../styles/common.scss"

// component
import Header from "@/components/common/header";
import Content from "@/components/terms/content";


const home = () => {
  return (
    <div className={styles["container"]}>
      <Header />
      <Content />
    </div>
  );
};

export default home;
