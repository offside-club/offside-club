import React from "react"
import Heading from "./Heading.jsx"
import Carousel from "./Carousel.jsx";
// import Dropdown from "./Dropdown.jsx";
import styles from "./homepage.module.css";


const Homepage =()=>{
    return(
        <div style={{background:'#3179DC'}}>
        <div className={styles.homepage}>
            <div className={styles.homeBody}>
            <Heading/>
            <Carousel/>
            </div>
        </div>
        </div>
    )
}

export default Homepage;