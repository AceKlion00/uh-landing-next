import Head from 'next/head'
import { Layout } from '../components/layout/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>United Hardscapes: Hardscape Kits</title>
        <meta name="description" content="Choose from a variety of patio, walkway, driveway, retaining wall, and stair kits for any budget and taste to create the perfect outdoor living space." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>Home page1</Layout>
    </>
  )
}
