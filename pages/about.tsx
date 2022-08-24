import Link from 'next/link';
import { client } from '../libs/client';
import styles from '../styles/About.module.scss';
import Header from '../component/Header';
import Footer from '../component/Footer';

export default function About() {
  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
}
