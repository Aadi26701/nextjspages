import type { NextPage } from "next";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.fickleflightBio}>
        <img className={styles.logoIcon} alt="" src="/logo.svg" />
        <div className={styles.fickleFlightDescription}>
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your needs in you online
          shop.
        </div>
        <div className={styles.socialIcons}>
          <img
            className={styles.facebookIcon}
            alt=""
            src="/entyposocialfacebookwithcircle.svg"
          />
          <img
            className={styles.facebookIcon}
            alt=""
            src="/entyposocialinstagramwithcircle.svg"
          />
          <img
            className={styles.facebookIcon}
            alt=""
            src="/entyposocialtwitterwithcircle.svg"
          />
        </div>
      </div>
      <div className={styles.seperator} />
      <div className={styles.footerLinks}>
        <div className={styles.companySection}>
          <div className={styles.company}>Company</div>
          <div className={styles.companyLinks}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.aboutUs}>News</div>
            <div className={styles.aboutUs}>Careers</div>
            <div className={styles.howWeWork}>How we work</div>
          </div>
        </div>
        <div className={styles.companySection}>
          <div className={styles.company}>Support</div>
          <div className={styles.companyLinks}>
            <div className={styles.aboutUs}>Account</div>
            <div className={styles.howWeWork}>Support Center</div>
            <div className={styles.aboutUs}>FAQ</div>
            <div className={styles.aboutUs}>Accessibility</div>
          </div>
        </div>
        <div className={styles.moreSection}>
          <div className={styles.company}>More</div>
          <div className={styles.companyLinks}>
            <div className={styles.aboutUs}>Covid Advisory</div>
            <div className={styles.aboutUs}>Airline Fees</div>
            <div className={styles.aboutUs}>Tips</div>
            <div className={styles.howWeWork}>Quarantine Rules</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
