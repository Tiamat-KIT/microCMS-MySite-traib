import Link from 'next/link';
import { client } from '../../libs/client';
import styles from '../../styles/Home.module.scss';

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
