import Head from 'next/head';
import { doGet } from '../../../../core/api-services/http';
import { KitType } from '../../../../core/types';
import { Layout } from '../../../../components/layout/layout';
import KitSeriesPage from '../../../../components/kits/kit-series-page';

interface Props {
  kitType: KitType;
  kitTypeId: string;
  seriesTypeId: string;
}

export default function KitSeries({ kitType, kitTypeId, seriesTypeId }: Props) {
  return (<>
      <Head>
        <title>United Hardscapes: --sub title here-- </title>
        <meta name="description" content="<description here>" />
      </Head>
      <Layout>
        <KitSeriesPage kitType={kitType} kitSeriesId={seriesTypeId} kitDesignId="" />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ res, query }: any) {
  const { kitTypeId, seriesTypeId } = query;
  let kitType;
  try {
    kitType = await doGet<KitType>(`/kits/${kitTypeId}/render-props?seriesTypeId=${seriesTypeId}`);
  } catch (error) {
    return { props: { error } };
  }
  return {
    props: { kitType, kitTypeId, seriesTypeId }
  };
}
