import React from "react";

// styles
import styles from "./home.module.scss";

// component
import Header from "@/components/common/header";
import Hero from "@/components/home/hero";
import Download from "@/components/home/download";
import MobileApp from "@/components/home/mobileApp";
import Banner from "@/components/home/banner";
import Section from "@/components/home/section";
import Rating from "@/components/home/rating/rating";
import Footer from "@/components/home/footer";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <Header />
      <Hero />
      <Download />
      <MobileApp />
      <div className={styles["z2"]}>
        <Banner text={"Reward zone"} />
        <Section
          title="Join 1000+ reward winners on Offside."
          description="More you use offside, closer you get to wide array of rewards."
          backgroundColor="#3F00C5"
        />
        <Banner text={"Fun zone"} />
        <Section
          title="Unlimited free to play contests"
          description="Play unlimited free to play cricket contests/mini-games and collect coins to win rewards."
          backgroundColor="#A2014E"
          image="/images/appGames.png"
        />
        <Banner text={"Community"} />
        <Section
          title="Be part of discussion 24*7"
          description="Don’t just watch live match but discuss with fellow fans as the match unfolds."
          backgroundColor="#0141A2"
          image="/images/appCommunity.png"
        />
        <Banner text={"Latest news"} />
        <Section
          title="Blogs"
          description="Never get bored when on Offside with unlimited games and contests to choose from. Collect coins and redeem them for rewards."
          backgroundColor="#AA0085"
          image="/images/appNews.png"
        />
        <Rating/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
