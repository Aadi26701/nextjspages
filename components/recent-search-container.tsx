import type { NextPage } from "next";
import styles from "./recent-search-container.module.css";

type RecentSearchContainerType = {
  flightCode?: string;
  flightOrigin?: string;
  flightDestination?: string;
  flightDepartureDate?: string;
};

const RecentSearchContainer: NextPage<RecentSearchContainerType> = ({
  flightCode,
  flightOrigin,
  flightDestination,
  flightDepartureDate,
}) => {
  return (
    <div className={styles.recentSearch}>
      <div className={styles.toAndFrom}>
        <b className={styles.departure}>{flightCode}</b>
        <img className={styles.planeicon} alt="" src={flightOrigin} />
        <b className={styles.arrival}>{flightDestination}</b>
      </div>
      <div className={styles.departureInfo}>
        <b className={styles.departure}>{`Depart on: `}</b>
        <div className={styles.departure}>{flightDepartureDate}</div>
      </div>
    </div>
  );
};

export default RecentSearchContainer;
