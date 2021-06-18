import Image from 'next/image';

interface Props {
  kitTypeName: string;
  kitSeriesName: string;
  seriesComment: string;
  image: string;
}

export default function KitsJumbotronSection({ kitTypeName, kitSeriesName, seriesComment, image }: Props) {
  return <section className="bg-secondary">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="pt-100 lg:pt-200 pb-50 lg:pb-110 text-center lg:text-left text-white">
          <h3 className="mb-20 font-normal text-32">{kitTypeName}<br />{kitSeriesName}</h3>
          <p className="text-14">{seriesComment}</p>
          <div className="block sm:flex justify-center lg:justify-start mt-50">
            <button className="btn btn-warning btn-md shadow-warning">Choose your kit design</button>
            <button className="btn btn-primary btn-md shadow-primarysm:ml-20 mt-10 sm:mt-0">Free Consultation</button>
          </div>
        </div>
        <div className="relative">
          <div className="invisible xl:visible absolute w-100 -mb-25">
            <Image src={image} width={655} height={426} alt="kits" />
          </div>
        </div>
      </div>
    </div>
  </section>;
}
