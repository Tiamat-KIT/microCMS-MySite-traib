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
        <p>徳島で生まれて、幼稚園年少まで西ノ宮で育ったり愛知で育ったりしている。<br/>その地域で育ち、幼稚園年長の頃に徳島に再び越し、幼稚園を卒業してそのまま徳島の小学校、中学校を卒業。<br/>中学2年の頃にゆっくり実況を数か月間だけ投稿していていたことがある。<br/>(現在はアカウントが残っていないため見ることができない)</p>
        <h4>プログラミングに出会い、高校生になって様々な出会いを経験するまで</h4>
        <p>中学3年のころ、とある「.exe」系の自作ホラーゲーム動画投稿者に興味を持ち、<br/>ゲームを作ることに対して漠然とした憧れを持った結果、ネットサーフィンで情報を集めた結果、<br/>プログラミングに出会う。</p>
        <h4>綾急技研に入るきっかけ</h4>
        <p>編集中</p>
        <h4>大学に入るきっかけ</h4>
        <p>編集中</p>
      </div>
      <Footer />
    </div>
  );
}
