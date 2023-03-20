import type { NextPage } from "next";
import Header from "../components/header";
import ExploreContainer from "../components/explore-container";
import RecentSearchesContainer from "../components/recent-searches-container";
import PopularDestinationsContainer from "../components/popular-destinations-container";
import RecommendedHolidaysContainer from "../components/recommended-holidays-container";
import PopularStaysContainer from "../components/popular-stays-container";
import SubscribeContainer from "../components/subscribe-container";
import Footer from "../components/footer";
import styles from "./index.module.css";

const Figmapage: NextPage = () => {
  return (
    <div className={styles.figmapage}>
      <Header />
      <ExploreContainer />
      <div className={styles.homeContents}>
        <RecentSearchesContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysContainer />
      </div>
      <div className={styles.footerSection}>
        <SubscribeContainer />
        <Footer />
      </div>
    </div>
  );
};

export default Figmapage;
