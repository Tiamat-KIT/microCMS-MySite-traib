export const getStaticProps = async (context) => {
  const slug = context.params?.slug;
  const draftKey = context.previewData?.draftKey;
  const content = await fetch(
    `https://tiamat.microcms.io/api/v1/blog/${slug}${
      draftKey !== undefined ? `?draftKey=${draftKey}` : ''
    }`,
    { headers: { 'X-MICROCMS-API-KEY': process.env.apiKey || '' } }
  ).then((res) => res.json());
  return {
    props: {
      content,
    },
  };
};

/* 
ページ側での処理
リダイレクトして記事ページに辿り着いた後は、`getStaticProps` が動作。
先ほどのcookie付きでこのページに辿り着いたら、`getStaticProps` の引数である `context` に対して
`context.preview` はtrue
`content.previewData` には `setPreviewData` に与えた引数
が格納されている。

これにより `slug` と `draftKey` を受け取ることができるので、microCMSのGET APIを叩く際にクエリとして指定し、下書き状態のコンテンツを取得することができる。*/
