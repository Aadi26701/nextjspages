import type { NextPage } from "next";
import styles from "./popular-destination-container.module.css";

type PopularDestinationContainerType = {
  destinationPrice?: string;
  destinationName?: string;
  destinationPriceRange?: string;
};

const PopularDestinationContainer: NextPage<
  PopularDestinationContainerType
> = ({ destinationPrice, destinationName, destinationPriceRange }) => {
  return (
    <button className={styles.popularDestinationCard}>
      <div className={styles.pariscard}>
        <img className={styles.cardimageIcon} alt="" src={destinationPrice} />
        <div className={styles.destinationDetails}>
          <b className={styles.destination}>{destinationName}</b>
          <div className={styles.details}>
            <div className={styles.from}>from</div>
            <div className={styles.price}>{destinationPriceRange}</div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default PopularDestinationContainer;
