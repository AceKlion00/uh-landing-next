import Image from 'next/image';
import { shimmerUrl } from '../ui-kit/common/blur-image';
import useConsultationService from '../../core/app-services/consultation-service';
import smoothScrollTo from '../ui-kit/services/smooth-scroll-to';

interface Props {
  kitTypeName: string;
  kitSeriesName: string;
  seriesComment: string;
  image: string;
}

export default function KitsJumbotronSection({ kitTypeName, kitSeriesName, seriesComment, image }: Props) {
  const consultationService = useConsultationService();
  return <section className="bg-secondary">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="pt-20 lg:pt-80 xl:pt-120 pb-50 lg:pb-60 xl:pb-100 text-center lg:text-left text-white">
          <h3 className="mb-20 font-normal text-32">{kitTypeName}<br />{kitSeriesName}</h3>
          <p className="text-14">{seriesComment}</p>
          <div className="btn-sm-block-group mt-50">
            <button className="btn btn-warning btn-lg shadow-warning" onClick={() => smoothScrollTo('kits', 300)}>Choose your kit design</button>
            <button className="btn btn-primary btn-lg shadow-primary" onClick={consultationService.showConsultationDialog}>Free Consultation</button>
          </div>
        </div>
        <div className="relative">
          <div className="invisible lg:visible absolute w-full bottom-40 xl:-bottom-25">
            <Image className="rounded-lg overflow-hidden" src={image} width={655} height={426} quality={100} objectFit="cover" alt="kits" placeholder="blur" blurDataURL={shimmerUrl} />
          </div>
        </div>
      </div>
    </div>
  </section>;
}
