import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <hr />
      <div className={styles.footer01}>
        <ul className={styles.menu}>
          <Link href="#">
            <li>About</li>
          </Link>
          <Link href="#">
            <li>About</li>
          </Link>
          <Link href="#">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
