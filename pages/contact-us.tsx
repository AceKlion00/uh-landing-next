import Head from 'next/head';
import { Layout } from '../components/layout/layout';

export default function ContactUs() {
  return (<>
      <Head>
        <title>United Hardscapes: --sub title here-- </title>
        <meta name="description" content="<description here>" />
      </Head>
      <Layout>
        <div className="mt-80">Contact Us page works!</div>
      </Layout>
    </>
  );
}
