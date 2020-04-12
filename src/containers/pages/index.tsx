import * as React from 'react';
import styles from './styles.module.scss';

const Pages: React.FC = () => {
  return(
    <div>
      <div className={styles.header}>
        <div className={styles.heading}>Jewelry Box</div>
        <div className={styles.subHeading}>Kakki's Portfolio Site</div>
        <div>
          <ul className={styles.tabBar}>
            <li className={styles.tab}>Blog</li>
            <li className={styles.tab}>Profile</li>
            <li className={styles.tab}>Other</li>
          </ul>
        </div>
      </div>
      <div className={styles.main}>
        <div>Contents</div>
        <div>
          <ul className={styles.cards}>
            <li className={styles.card}>
              <div></div>
              <div>Blog</div>
            </li>
            <li className={styles.card}>
              <div></div>
              <div>Profile</div>
            </li>
            <li className={styles.card}>
              <div></div>
              <div>Other</div>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Pages;
