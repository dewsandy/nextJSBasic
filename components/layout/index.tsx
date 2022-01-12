import { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../header';
import Footer from '../footer';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>
          NextJS |
          {' '}
          {pageTitle}
        </title>
        <meta name="description" content="Basic NextJS Website" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>

    </>
  );
}
