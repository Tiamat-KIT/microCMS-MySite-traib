import { client } from '../../libs/client';
import styles from '../../styles/Home.module.scss';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Error from '../404';

/*副作用として、コンテンツがない場合にもページのレンダリング処理が通ってしまうので、コンポーネント側でエラーハンドリング*/

export default function BlogId({ blog }) {
  if (!blog) {
    return <Error />;
  }
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.publishedAt}>{blog.publishedAt}</p>
        <p className="category">{blog.category && `${blog.category.name}`}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
          className={styles.post}
        />
      </main>
      <Footer />
    </div>
  );
}

// 静的生成のためのパス指定r
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
  /* 返り値のオブジェクトで `fallback: false` としてしまうと、公開済みのページは良いが下書き状態のページは未生成のため、`/api/preview` からのリダイレクト時に404となってしまう。 よって、ここでは `fallback: true` と指定
  
  なんか動かないんで却下*/
};

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
