import Head from 'next/head';
import { doGet } from '../../../../core/api-services/http';
import { KitType } from '../../../../core/types';
import { Layout } from '../../../../components/layout/layout';
import KitSeriesPage from '../../../../components/kits/kit-series-page';
import useGAService from '../../../../core/app-services/ga-service';

interface Props {
  kitType: KitType;
  seriesTypeId: string;
}

export default function KitSeries({ kitType, seriesTypeId }: Props) {
  const gaService = useGAService();
  gaService.pageView(`/kits/${kitType}/${seriesTypeId}`);
  const series = kitType.kitSeries.find(s => s.kitSeriesId === seriesTypeId) as any;
  const design = series.kitDesigns[0];
  return (<>
      <Head>
        <title>{design.seoTitle}</title>
        <meta name="description" content={design.seoDescription} />
      </Head>
      <Layout>
        <KitSeriesPage kitType={kitType} kitSeriesId={seriesTypeId} kitDesignId={design.designId} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ query }: any) {
  const { kitTypeId, seriesTypeId } = query;
  let kitType;
  try {
    kitType = await doGet<KitType>(`/kits/${kitTypeId}/render-props?seriesTypeId=${seriesTypeId}`);
  } catch (error) {
    return { props: { error } };
  }
  return {
    props: { kitType, seriesTypeId }
  };
}
