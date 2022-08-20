import Link from 'next/link';
import { client } from '../libs/client';
import styles from '../styles/Index.module.scss';
import Header from '../component/Header';
import Footer from '../component/Footer';

export default function Home({ blog }) {
  return (
    <div>
      <Header />
      <ul>
        {category.map((category) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <h4 className={styles.pagetitle}>{blog.title}</h4>
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  // カテゴリコンテンツ取得
  const categoryData = await client.get({ endpoint: 'categoryes' });
  return {
    props: {
      blog: data.contents,
      caterory: categoryData.contents,
    },
  };
};

/*`${styles.bg_pattern} ${styles.Paper}`*/
//二重のスタイル指定をしたいときはこうする
