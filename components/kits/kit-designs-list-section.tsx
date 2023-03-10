import Link from 'next/link';
import Image from 'next/image';
import { KitDesign } from '../../core/types';
import Currency from '../ui-kit/misc/currency';
import { shimmerUrl } from '../ui-kit/common/blur-image';
import useChooseKitTipDialogService from '../../core/app-services/choose-kit-tip-dialog-service';

interface Props {
  kitTypeId: string;
  kitSeriesId: string;
  kitTypeName: string;
  kitDesigns: KitDesign[];
  designId: string;
}

export default function KitDesignsListSection({ kitTypeId, kitSeriesId, kitTypeName, kitDesigns, designId }: Props) {
  const chooseKitTipDialogService = useChooseKitTipDialogService();

  return (<section id="kits" className="pt-110 pb-80 bg-light-50">
    <div className="container mx-auto">
      <div className="block md:flex justify-between items-center text-center mb-50">
        <h3 className="text-primary font-light text-32">Choose your kit design</h3>
        <button className="btn btn-warning btn-mini shadow-warning btn-sm-block mt-20 sm:mt-0" onClick={chooseKitTipDialogService.showChooseKitTipDialog}>How To Choose The Right Kit</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-30">
        {kitDesigns.map((design, index) => (<Link href={`/kits/${kitTypeId}/${kitSeriesId}/${design.designId}`} key={index} passHref>
          <div className={"border-4 bg0white rounded-lg p-10 mb-30 cursor-pointer shadow-secondary " + (design.designId === designId ? "border-primary" : "border-white")}>
            <Image
              className="rounded-md overflow-hidden"
              src={design.coverImage}
              width={510}
              height={336}
              alt={design.name}
              layout="responsive"
              placeholder="blur"
              blurDataURL={shimmerUrl}
            />
            <div className="flex justify-between items-center pt-10 pb-5">
              <div className="flex flex-col">
                <span className="font-medium text-light-400 text-14">{kitTypeName}</span>
                <span className="text-18">Kit #{design.name}</span>
              </div>
              <span className="text-24 text-primary"><Currency value={design.price} /></span>
            </div>
          </div>
        </Link>))}
      </div>
    </div>
  </section>);
}
