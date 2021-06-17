import Head from 'next/head';
import { Layout } from '../components/layout/layout';

export default function Faqs() {
  return (<>
      <Head>
        <title>United Hardscapes: --sub title here-- </title>
        <meta name="description" content="<description here>" />
      </Head>
      <Layout>
        <div>FAQs page works!</div>
      </Layout>
    </>
  );
}
