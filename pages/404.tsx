import Link from 'next/link';

const Custom404 = () => {
  return (
    <div>
      <main className="main">
        <p>Sorry... Your Request's Page Not Found...</p>
      </main>
      <Link href="/">
        <a>Redirect</a>
      </Link>
    </div>
  );
};

export default Custom404;
