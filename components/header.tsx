import type { NextPage } from "next";
import styles from "./header.module.css";

const Header: NextPage = () => {
  return (
    <header className={styles.topHeader}>
      <div className={styles.topContainer}>
        <img
          className={styles.fickleflightIcon}
          alt=""
          src="/fickleflight.svg"
        />
        <div className={styles.navigationRight}>
          <div className={styles.navigationMenu}>
            <div className={styles.explore}>Explore</div>
            <div className={styles.search}>Search</div>
            <button className={styles.hotels}>Hotels</button>
            <button className={styles.hotels}>Offers</button>
          </div>
          <div className={styles.accountSection}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src="/notification.svg"
            />
            <img
              className={styles.notificationBellIcon}
              alt=""
              src="/notification1.svg"
            />
            <img
              className={styles.avatarIcon}
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
