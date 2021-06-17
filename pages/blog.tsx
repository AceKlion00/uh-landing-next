import Head from 'next/head';
import { Layout } from '../components/layout/layout';

export default function Blog() {
  return (<>
      <Head>
        <title>United Hardscapes: --sub title here-- </title>
        <meta name="description" content="<description here>" />
      </Head>
      <Layout>
        <div className="mt-80">Blog page works!</div>
      </Layout>
    </>
  );
}
