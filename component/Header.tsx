import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.scss';
/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';*/

const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 };

const Header = () => {
  return (
    <div>
      <header className={styles['header-5']}>
        <div className={styles['header-inner']}>
          <Link href="/">
            <Image
              src="https://pbs.twimg.com/media/Fal2Aj3aMAA-Nbl?format=png&name=small"
              className={styles.logo}
              width="65px"
              height="65px"
            />
          </Link>
          <nav className={styles['header-nav']}>
            <ul className={styles['header-nav-list']}>
              <Link href="https://twitter.com/Fill_Axt">
                <li className={`${styles['header-nav-item']} ${styles.select}`}>
                  Twitter
                </li>
              </Link>
              <Link href="#">
                <li className={`${styles['header-nav-item']} `}>Works</li>
              </Link>
              <Link href="#">
                <li className={`${styles['header-nav-item']} `}>Contract</li>
              </Link>
            </ul>
            {/*<div className={styles['header-ham']}>
              <div className={styles['menu2']} />
              <div className={styles['menu2']} />
              <div className={styles['menu2']} />
        </div>*/}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

/* https://dev.classmethod.jp/articles/tips-nextjs-with-hyphen-class-name/*/
