import type { NextPage } from "next";
import styles from "./subscribe-container.module.css";

const SubscribeContainer: NextPage = () => {
  return (
    <div className={styles.subscribeSection}>
      <div className={styles.shareYourTravelsForm}>
        <div className={styles.formHeadingSection}>
          <b className={styles.formTitleSubtext}>subscribe to our newsletter</b>
          <b className={styles.formTitle}>Get weekly updates</b>
        </div>
        <form className={styles.form}>
          <div className={styles.formText}>
            <div className={styles.formDescription}>
              Fill in your details to join the party!
            </div>
          </div>
          <div className={styles.formFields}>
            <div className={styles.formText}>
              <div className={styles.input}>
                <div className={styles.inactive}>
                  <div className={styles.muiautocompletetag}>
                    <div className={styles.chip}>
                      <div className={styles.container}>
                        <div className={styles.avatar}>
                          <div className={styles.op}>F</div>
                        </div>
                        <div className={styles.typography}>
                          <div className={styles.chip1}>Chip</div>
                        </div>
                        <img
                          className={styles.cancelIcon}
                          alt=""
                          src="/cancel.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.chip}>
                      <div className={styles.container}>
                        <div className={styles.avatar}>
                          <div className={styles.op}>F</div>
                        </div>
                        <div className={styles.typography}>
                          <div className={styles.chip1}>Chip</div>
                        </div>
                        <img
                          className={styles.cancelIcon}
                          alt=""
                          src="/cancel.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.yourName}>Your name</div>
                  <div className={styles.muiAutocompleteIndicator}>
                    <div className={styles.iconbutton}>
                      <div className={styles.unstylediconbutton}>
                        <img
                          className={styles.closeIcon}
                          alt=""
                          src="/close.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.arrow}>
                    <img className={styles.cancelIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.formText}>
              <div className={styles.input}>
                <div className={styles.inactive}>
                  <div className={styles.muiautocompletetag}>
                    <div className={styles.chip}>
                      <div className={styles.container}>
                        <div className={styles.avatar}>
                          <div className={styles.op}>F</div>
                        </div>
                        <div className={styles.typography}>
                          <div className={styles.chip1}>Chip</div>
                        </div>
                        <img
                          className={styles.cancelIcon}
                          alt=""
                          src="/cancel.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.chip}>
                      <div className={styles.container}>
                        <div className={styles.avatar}>
                          <div className={styles.op}>F</div>
                        </div>
                        <div className={styles.typography}>
                          <div className={styles.chip1}>Chip</div>
                        </div>
                        <img
                          className={styles.cancelIcon}
                          alt=""
                          src="/cancel.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.yourName}>Email address</div>
                  <div className={styles.muiAutocompleteIndicator}>
                    <div className={styles.iconbutton}>
                      <div className={styles.unstylediconbutton}>
                        <img
                          className={styles.closeIcon}
                          alt=""
                          src="/close.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.arrow}>
                    <img className={styles.cancelIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.searchButton}>
            <div className={styles.submit}>Submit</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeContainer;
