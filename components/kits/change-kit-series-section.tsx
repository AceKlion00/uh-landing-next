import Link from 'next/link';
import { KitSeries } from '../../core/types';

interface Props {
  kitTypeId: string;
  kitSeries: KitSeries[];
  seriesId: string;
}

export default function ChangeKitSeriesSection({ kitTypeId, seriesId, kitSeries }: Props) {
  return (<section className="py-80 bg-light-50">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="mr-0 md:mr-80 mb-40 sm:mb-0">
          <p className="text-18 font-medium mb-0">Change Series</p>
          <p className="text-14 text-warning-100 mb-0">Go to another series</p>
        </div>
        <div className="flex flex-col sm:flex-row">
          {kitSeries.map((series, index) => (<Link href={`/kits/${kitTypeId}/${series.kitSeriesId}`} key={index} passHref>
            <div className={"relative flex items-center px-20 py-15 border-light shadow secondary rounded-lg cursor-pointer text-center mb-30 sm:mb-0 mx-10" + (series.kitSeriesId === seriesId ? " bg-primary border-white text-white" : " bg-white border-primary")}>
              {series.name}
              {series.isBestSeller && <span className="-bottom-20 absolute text-12 text-primary w-full left-0">Best seller</span>}
            </div>
          </Link>))}
        </div>
      </div>
    </div>
  </section>);
}
