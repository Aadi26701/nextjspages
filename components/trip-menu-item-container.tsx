import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./trip-menu-item-container.module.css";

type TripMenuItemContainerType = {
  attractionCommuteId?: string;
  attractionCommuteText?: string;

  /** Style props */
  propBackgroundColor?: Property.BackgroundColor;
};

const TripMenuItemContainer: NextPage<TripMenuItemContainerType> = ({
  attractionCommuteId,
  attractionCommuteText,
  propBackgroundColor,
}) => {
  const iconStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <button className={styles.tripMenuItem}>
      <div className={styles.icon} style={iconStyle}>
        <img className={styles.iconVector} alt="" src={attractionCommuteId} />
      </div>
      <div className={styles.text}>{attractionCommuteText}</div>
    </button>
  );
};

export default TripMenuItemContainer;
