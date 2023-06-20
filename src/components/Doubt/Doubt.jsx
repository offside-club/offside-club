import React from "react";
import styles from "./Doubt.module.css";
import HalfPhone1 from "../../assets/images/halfphone1.png";
import HalfPhone2 from "../../assets/images/halfphone2.png";
import Heading from "../../util/Heading";

const Doubt = () => {
  return (
    <>
      <Heading
        heading="Best place for sports discussion"
        subheading="A place that makes consversation as memorable as the matches"
      />
      <div className={styles.container}>
        <div className={styles.leftDiv}>
          <div className={styles.box1}>
            <div className={styles.cardContainer}>
              <div className={styles.cardContainerInnerDiv}>
                <h3 className={styles.cardTitle}>Public Groups</h3>
                <p className={styles.cardSubTitle}>
                  Discuss live matches with other fans
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  alt="Logo"
                  src={HalfPhone1}
                  className={styles.halfPhone1}
                />
              </div>
            </div>
          </div>

          <div className={styles.box2}>
            <div className={styles.cardContainer}>
              <div className={styles.cardContainerInnerDiv}>
                <h3 className={styles.cardTitle}>Lounge</h3>
                <p className={styles.cardSubTitle}>
                  Create and discuss on topics close to your heart with fellow
                  fans
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img
                  alt="Logo"
                  src={HalfPhone2}
                  className={styles.halfPhone2}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.box1} >
          <div>
            <div className={styles.cardContainer}>
              <div className={styles.cardContainerInnerDiv}>
                <h3 className={styles.cardTitle}>Lounge</h3>
                <p className={styles.cardSubTitle}>
                  A place that makes conversations as memorable as the matches.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "100px",
                }}
              >
                <div sx={{ width: "100%" }}>
                  <img
                    alt="Logo"
                    src={FullPhone}
                    className={styles.fullPhone}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className={styles.containerVideo}>
        <iframe
          style={{ borderRadius: 18 }}
          width="1300"
          height="600"
          src={`https://www.youtube.com/embed/lMJWsYZU2wY`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </>
  );
};

export default Doubt;
