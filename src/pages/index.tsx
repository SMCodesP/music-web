import Head from 'next/head';

import Menu from '@/components/Menu';

import { Container } from '@/styles/GlobalStyle';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>SMp3Player - Início</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
    </Container>
  );
}
