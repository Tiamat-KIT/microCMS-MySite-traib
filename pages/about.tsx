import Link from 'next/link';
import { client } from '../libs/client';
import styles from '../styles/About.module.scss';
import Header from '../component/Header';
import Footer from '../component/Footer';

export default function About() {
  const AboutParam = (name: string) => {
    return <h3>{name}ってどんな人?</h3>;
  };
  return (
    <div>
      <Header />
      {AboutParam('Fill')}
      <div className={styles.post}>
        <h4></h4>
        <h4></h4>
        <h4></h4>
        <h4></h4>
      </div>
      <Footer />
    </div>
  );
}
