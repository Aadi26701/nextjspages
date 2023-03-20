import type { NextPage } from "next";
import PopularDestinationContainer from "./popular-destination-container";
import styles from "./popular-destinations-container.module.css";

const PopularDestinationsContainer: NextPage = () => {
  return (
    <div className={styles.popDestinationsMain}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <button className={styles.viewAllTop}>
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
        </button>
      </div>
      <div className={styles.popDestinationItems}>
        <PopularDestinationContainer
          destinationPrice="/cardimage@2x.png"
          destinationName="Paris"
          destinationPriceRange="$699"
        />
        <PopularDestinationContainer
          destinationPrice="/cardimage1@2x.png"
          destinationName="Greece"
          destinationPriceRange="$1079"
        />
        <PopularDestinationContainer
          destinationPrice="/cardimage2@2x.png"
          destinationName="Norway"
          destinationPriceRange="$895"
        />
        <PopularDestinationContainer
          destinationPrice="/cardimage3@2x.png"
          destinationName="Tuscany"
          destinationPriceRange="$1245"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
