import type { NextPage } from "next";
import RecentSearchContainer from "./recent-search-container";
import TripMenuItemContainer from "./trip-menu-item-container";
import styles from "./recent-searches-container.module.css";

const RecentSearchesContainer: NextPage = () => {
  return (
    <div className={styles.upcomingFlightSection}>
      <b className={styles.recentSearches}>Recent Searches</b>
      <div className={styles.flightDetails}>
        <div className={styles.recentSearchesSection}>
          <RecentSearchContainer
            flightCode="SIN"
            flightOrigin="/planeicon.svg"
            flightDestination="LAX"
            flightDepartureDate="7 Sep 2023"
          />
          <RecentSearchContainer
            flightCode="MY"
            flightOrigin="/planeicon1.svg"
            flightDestination="DUB"
            flightDepartureDate="9 Sep 2023"
          />
        </div>
        <div className={styles.prepareMenu}>
          <div className={styles.recentSearches}>Prepare for your trip</div>
          <div className={styles.tripMenu}>
            <button className={styles.tripMenuItem}>
              <div className={styles.icon}>
                <img className={styles.iconVector} alt="" src="/icon.svg" />
              </div>
              <div className={styles.text}>Hotel</div>
            </button>
            <TripMenuItemContainer
              attractionCommuteId="/icon1.svg"
              attractionCommuteText="Attractions"
            />
            <button className={styles.tripMenuItem}>
              <div className={styles.icon1}>
                <img className={styles.iconVector} alt="" src="/icon2.svg" />
              </div>
              <div className={styles.text}>Eats</div>
            </button>
            <TripMenuItemContainer
              attractionCommuteId="/icon3.svg"
              attractionCommuteText="Commute"
              propBackgroundColor="#fdbf00"
            />
            <button className={styles.tripMenuItem}>
              <div className={styles.icon2}>
                <img className={styles.iconVector} alt="" src="/icon4.svg" />
              </div>
              <div className={styles.text}>Taxi</div>
            </button>
            <button className={styles.tripMenuItem}>
              <div className={styles.icon3}>
                <img className={styles.iconVector} alt="" src="/icon5.svg" />
              </div>
              <div className={styles.text}>Movies</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSearchesContainer;
