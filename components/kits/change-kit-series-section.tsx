import { KitSeries } from '../../core/types';

interface Props {
  kitSeries: KitSeries[];
  seriesId: string;
}

export default function({ seriesId, kitSeries }: Props) {
  return (<section className="py=80 bg-light-50">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="mr-0 md:mr-80 mb-40 sm:mb-0">
          <p className="text-18 font-medium mb-0">Change Series</p>
          <p className="text-14 text-warning-100 mb-0">Go to another series</p>
        </div>
        <div className="flex flex-col sm:flex-row">
          {kitSeries.map((series, index) => (<div
            className={"relative flex items-center px-20 py-15 border-light shadow secondary rounded-lg cursor-pointer text-center mb-30 sm:mb-0" + (series.kitSeriesId === seriesId ? " bg-white border-primary" : " bg-primary border-white")}
            key={index}
          >
            <span className="-bottom-20 absolute text-12 text-primary w-100 left-0">Best seller</span>
          </div>))}
        </div>
      </div>
    </div>
  </section>);
}
