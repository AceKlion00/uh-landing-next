import Head from 'next/head';
import { Layout } from '../components/layout/layout';
import useGAService from '../core/app-services/ga-service';

export default function Blog() {
  const gaService = useGAService();
  gaService.pageView('/blog');
  return (<>
      <Head>
        <title>United Hardscapes: --sub title here-- </title>
        <meta name="description" content="<description here>" />
      </Head>
      <Layout>
        <div>Blog page works!</div>
      </Layout>
    </>
  );
}
