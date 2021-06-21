import Head from 'next/head';
import { Layout } from '../components/layout/layout';

export default function HowItWorks() {
  return (<>
      <Head>
        <title>United Hardscapes: --sub title here-- </title>
        <meta name="description" content="<description here>" />
      </Head>
      <Layout>
        <div>How It Works page works!</div>
      </Layout>
    </>
  );
}
