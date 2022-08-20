import Link from 'next/link';
import { client } from '../../libs/client';
import styles from '../../styles/Home.module.scss';

// 各カテゴリーページでブログコンテンツをフィルタリング

export default function CategoryId({ blog }) {
  //カテゴリに紐づいたコンテンツがない場合に表示
  if (blog.length === 0) {
    return <div>ブログコンテンツがない…</div>;
  }
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'categories' });
  const paths = data.contents.map((content) => `/category/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述する
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: 'blog',
    queries: { filters: `category[equals]${id}` },
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};

/* filtersパラメータを使ってフィルタリング。
今回のケースのように、単数のコンテンツ参照で使用できるのは [equals]のみ。
content_idを指定することで紐付いたコンテンツを取得することができる*/
