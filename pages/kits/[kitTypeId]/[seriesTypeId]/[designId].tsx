import Head from 'next/head';
import { doGet } from '../../../../core/api-services/http';
import { KitType } from '../../../../core/types';
import { Layout } from '../../../../components/layout/layout';
import KitSeriesPage from '../../../../components/kits/kit-series-page';

interface Props {
  kitType: KitType;
  seriesTypeId: string;
  designId: string;
}

export default function DesignDetails({ kitType, seriesTypeId, designId }: Props) {
  const series = kitType.kitSeries.find(s => s.kitSeriesId === seriesTypeId) as any;
  const design = series.kitDesigns.find((s: any) => s.designId === designId) as any;
  return (<>
      <Head>
        <title>{design.seoTitle}</title>
        <meta name="description" content={design.seoDescription} />
      </Head>
      <Layout>
        <KitSeriesPage kitType={kitType} kitSeriesId={seriesTypeId} kitDesignId={designId} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query }: any) {
  const { kitTypeId, seriesTypeId, designId } = query;
  let kitType;
  try {
    kitType = await doGet<KitType>(`/kits/${kitTypeId}/render-props?seriesTypeId=${seriesTypeId}&designId=${designId}`);
  } catch (error) {
    return { props: { error } };
  }
  return {
    props: { kitType, seriesTypeId, designId }
  };
}
