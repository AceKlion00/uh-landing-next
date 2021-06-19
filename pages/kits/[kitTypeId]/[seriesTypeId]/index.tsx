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

export async function getServerSideProps(context: any) {
  const { kitTypeId, seriesTypeId } = context.query;
  const kitType = await doGet<KitType>(`/kits/${kitTypeId}/render-props?seriesTypeId=${seriesTypeId}`);
  return {
    props: { kitType, kitTypeId, seriesTypeId }
  };
}
