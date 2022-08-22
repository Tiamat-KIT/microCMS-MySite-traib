import Link from 'next/link';
import { client } from '../../libs/client';
import styles from '../styles/Index.module.scss';
import Header from '../../component/Header';
import Footer from '../../component/Footer';

export default function About({ person }) {
  return (
    <div>
      <Header />
      <h3>{person.title}</h3>
      <p>{person.text}</p>
      <Footer />
    </div>
  );
}

// 静的生成のためのパス指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'person' });

  const paths = data.contents.map((content) => `/about/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async (context) => {
  const IntroData = await client.get({
    endpoint: 'person',
    contentid: 'whatfill',
  });

  return {
    props: {
      person: IntroData,
    },
  };
};

/*`${styles.bg_pattern} ${styles.Paper}`*/
//二重のスタイル指定をしたいときはこうする

/* endpointにcategories を指定して、カテゴリーコンテンツを取得していること。categoryData.contentsが配列で、これをcategoryとしてpropsに渡す。
あとは、ブログコンテンツと同じで配列データに対してmapしてブラウザ上に表示*/
