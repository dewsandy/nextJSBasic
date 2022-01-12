import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/profile.jpg" width={200} height={200} alt="profile" />
      <h1 className={styles['title-homepage']}>Welcom Viuit</h1>
    </Layout>
  );
}
