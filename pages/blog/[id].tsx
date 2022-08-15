import { client } from '../../libs/client';

export default function BlogId({ blog }) {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.pubishedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }} />
    </main>
  );
}

// 静的生成のためのパス指定r
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => `blogs/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', content: id });

  return {
    props: {
      blog: data,
    },
  };
};
