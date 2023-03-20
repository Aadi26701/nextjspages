import type { NextPage } from "next";
import HotelCardContainer from "./hotel-card-container";
import styles from "./popular-stays-container.module.css";

const PopularStaysContainer: NextPage = () => {
  return (
    <div className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <button className={styles.viewAllStaysButton}>
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright1.svg"
          />
        </button>
      </div>
      <div className={styles.hotelCards}>
        <HotelCardContainer
          hotelImageUrl="/unsplashrlwe8f8anoc@2x.png"
          hotelName="Entire bungalow"
          hotelPrice="Matterhorn Suites"
          hotelRating="$575/night"
          hotelReviews="/video-icon.svg"
          hotelRatingText="4.9"
          hotelReviewCount="(60 reviews)"
        />
        <HotelCardContainer
          hotelImageUrl="/unsplashrlwe8f8anoc1@2x.png"
          hotelName="2-Story beachfront suite"
          hotelPrice="Discovery Shores"
          hotelRating="$360/night"
          hotelReviews="/video-icon.svg"
          hotelRatingText="4.8"
          hotelReviewCount="(116 reviews)"
          propMarginBottom="16px"
        />
        <HotelCardContainer
          hotelImageUrl="/unsplashrlwe8f8anoc2@2x.png"
          hotelName="Single deluxe hut"
          hotelPrice="Arctic Hut "
          hotelRating="$420/night"
          hotelReviews="/video-icon.svg"
          hotelRatingText="4.7"
          hotelReviewCount="(78 reviews)"
          propMarginBottom="16px"
        />
        <HotelCardContainer
          hotelImageUrl="/unsplashrlwe8f8anoc3@2x.png"
          hotelName="Deluxe King Room"
          hotelPrice="Lake Louise Inn"
          hotelRating="$244/night"
          hotelReviews="/video-icon1.svg"
          hotelRatingText="4.6"
          hotelReviewCount="(63 reviews)"
          propMarginBottom="unset"
        />
      </div>
      <div className={styles.mobileViewAllStays}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
      </div>
    </div>
  );
};

export default PopularStaysContainer;
