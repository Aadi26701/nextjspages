import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./hotel-card-container.module.css";

type HotelCardContainerType = {
  hotelImageUrl?: string;
  hotelName?: string;
  hotelPrice?: string;
  hotelRating?: string;
  hotelReviews?: string;
  hotelRatingText?: string;
  hotelReviewCount?: string;

  /** Style props */
  propMarginBottom?: Property.MarginBottom;
};

const HotelCardContainer: NextPage<HotelCardContainerType> = ({
  hotelImageUrl,
  hotelName,
  hotelPrice,
  hotelRating,
  hotelReviews,
  hotelRatingText,
  hotelReviewCount,
  propMarginBottom,
}) => {
  const popularHotelCardStyle: CSS.Properties = useMemo(() => {
    return {
      marginBottom: propMarginBottom,
    };
  }, [propMarginBottom]);

  return (
    <div className={styles.popularHotelCard} style={popularHotelCardStyle}>
      <div className={styles.hotelCard}>
        <img className={styles.imageIcon} alt="" src={hotelImageUrl} />
        <div className={styles.stayDetails}>
          <div className={styles.stayDetailsRows}>
            <div className={styles.type}>{hotelName}</div>
            <b className={styles.title}>{hotelPrice}</b>
            <div className={styles.price}>{hotelRating}</div>
          </div>
          <button className={styles.video}>
            <img className={styles.videoIcon} alt="" src={hotelReviews} />
          </button>
        </div>
        <div className={styles.rating}>
          <div className={styles.stars}>
            <img className={styles.staricon} alt="" src="/staricon.svg" />
            <div className={styles.rating1}>{hotelRatingText}</div>
          </div>
          <div className={styles.reviews}>{hotelReviewCount}</div>
        </div>
        <button className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </button>
      </div>
    </div>
  );
};

export default HotelCardContainer;
