import type { NextPage } from "next";
import RecommendedHolidayContainer from "./recommended-holiday-container";
import styles from "./recommended-holidays-container.module.css";

const RecommendedHolidaysContainer: NextPage = () => {
  return (
    <div className={styles.recommendedHolidaysContainer}>
      <div className={styles.recHolidaysTitle}>
        <b className={styles.recommendedHolidays}>Recommended Holidays</b>
        <button className={styles.viewHolidaysTop}>
          <div className={styles.viewAllHolidays}>View all holidays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright1.svg"
          />
        </button>
      </div>
      <div className={styles.recCardsContainer}>
        <RecommendedHolidayContainer
          packageCode="/image@2x.png"
          packageDestination="Bali"
          packageDuration="4D3N"
          packagePrice="$899"
        />
        <RecommendedHolidayContainer
          packageCode="/switzerlandimage@2x.png"
          packageDestination="Swiss"
          packageDuration="6D5N"
          packagePrice="$900"
        />
        <RecommendedHolidayContainer
          packageCode="/boracayimage@2x.png"
          packageDestination="Boracay"
          packageDuration="5D4N"
          packagePrice="$699"
        />
        <RecommendedHolidayContainer
          packageCode="/palawanimage@2x.png"
          packageDestination="Palawan"
          packageDuration="4D3N"
          packagePrice="$789"
        />
      </div>
      <div className={styles.viewHolidaysBottom}>
        <div className={styles.viewAllHolidays1}>View all holidays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
