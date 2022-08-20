import Link from 'next/link';
import { client } from '../libs/client';
import styles from '../styles/Index.module.scss';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Clear from '../component/CookieClear'

export default function Home({ blog }) {
  return (
    <div>
      <Clear />
      <Header />
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

  return {
    props: {
      blog: data.contents,
    },
  };
};

/*`${styles.bg_pattern} ${styles.Paper}`*/
//二重のスタイル指定をしたいときはこうする
