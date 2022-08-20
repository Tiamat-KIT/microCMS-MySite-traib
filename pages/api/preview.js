// プレビュー用関数の作成
/*import fetch from 'node-fetch';

export default async (req, res) => {
  if (!req.query.slug) {
    return res.status(404), end();
  }

  const content = await fetch(
    `https://tiamat.microcms.io/api/v1/blog/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
    { headers: { 'X-MICROCMS-API-KEY': process.env.apiKey || '' } }
  )
    .then((res) => res.json())
    .catch((error) => null);

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { Location: `/${content.id}` });
  res.end(`Preview mode enabled`);
};*/

/* Next.jsにはサーバーレス関数を起動できるAPI Routes機能がある。
`/pages/api/`以下のファイルは
サーバーレス関数として動作。
Preview Modeではこの機能を利用*/

/* ブラウザから `/api/preview` にアクセスするとこの関数が起動。
クエリとして渡ってくる slug は記事のID、draftKey は下書き用の draftKey に当たる*/

/*
まず、slugが存在しない場合は404を返す。
次に、slugが正しいものであるか実際にmicroCMSのAPIを呼び出してチェック。
その後、`res.setPreviewData()` に渡した引数が `getStaticProps` の引数である `context` から受け取る。
最後に、本来の記事のパスにリダイレクトさせます。
この際に、オープンリダイレクトの脆弱性回避のために、`req.query.slug` ではなく `content.id` を使う*/
