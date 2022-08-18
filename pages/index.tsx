import Link from 'next/link';
import { client } from '../libs/client';
import styles from '../styles/Index.module.scss';

export default function Home({ blog }) {
  return (
    <div className={`${styles.bg_pattern} ${styles.Paper}`}>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a className={styles.pagetitle}>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
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
