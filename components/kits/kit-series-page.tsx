import { KitType } from '../../core/types';
import KitsJumbotronSection from './kits-jumbotron-section';
import KitDesignsListSection from './kit-designs-list-section';
import KitDesignDetailsSection from './kit-design-details-section';
import ChangeKitSeriesSection from './change-kit-series-section';

interface Props {
  kitType: KitType;
  kitSeriesId: string;
  kitDesignId: string;
}

export default function KitSeriesPage({ kitType, kitSeriesId, kitDesignId }: Props) {
  const kitSeries = kitType.kitSeries.find(series => series.kitSeriesId === kitSeriesId) || { name: 'N/A', comment: 'N/A', image: 'N/A', kitDesigns: [] };
  const selectedDesignIndex = kitDesignId ? kitSeries.kitDesigns.findIndex(design => design.designId === kitDesignId) : 0;
  const kitDesign = kitSeries.kitDesigns[selectedDesignIndex];
  return (<>
    <KitsJumbotronSection kitTypeName={kitType.name} kitSeriesName={kitSeries.name} seriesComment={kitSeries.comment} image={kitSeries.image} />
    <KitDesignsListSection kitTypeId={kitType.kitTypeId} kitTypeName={kitType.name} kitSeriesId={kitSeriesId} kitDesigns={kitSeries.kitDesigns} designId={kitDesign.designId} />
    <KitDesignDetailsSection design={kitDesign} />
    <ChangeKitSeriesSection kitTypeId={kitType.kitTypeId} kitSeries={kitType.kitSeries} seriesId={kitSeriesId} />
  </>);
}
