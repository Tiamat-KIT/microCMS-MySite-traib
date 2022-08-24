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
        <h4>幼少期(0~3歳頃)から中学まで</h4>
        <p>編集中</p>
        <h4>高校生になり、プログラミングに出会うまで</h4>
        <p>編集中</p>
        <h4>綾急技研に入るきっかけ</h4>
        <p>編集中</p>
        <h4>大学に入るきっかけ</h4>
        <p>編集中</p>
      </div>
      <Footer />
    </div>
  );
}
