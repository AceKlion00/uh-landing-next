import Image from 'next/image';
import { KitDesign } from '../../core/types';
import { useState } from 'react';
import Currency from '../ui-kit/misc/currency';
import Icon from '../ui-kit/icon';
import useImagePreview from '../ui-kit/dialog/use-image-preview';
import { shimmerUrl } from '../ui-kit/common/blur-image';
import smoothScrollTo from '../ui-kit/services/smooth-scroll-to';
import useBuyKitService from '../../core/app-services/buy-kit-service';

interface Props {
  design: KitDesign;
}

interface ComponentType {
  title: string;
  options: string[];
}

function parseComponent(design: KitDesign): ComponentType[] {
  return design.components.map(component => {
    const parsed = component.match(/(.*)\s*:\s*(.*)/);
    if (!parsed) {
      return { title: component, options: [] };
    } else {
      const title = parsed[1];
      const options = parsed[2].split(/\s*;\s*/);
      return { title, options };
    }
  });
}

export default function KitDesignDetailsSection({ design }: Props) {
  const components = parseComponent(design);
  const imagePreviewService = useImagePreview();
  const buyKitService = useBuyKitService();
  const [designImageIndex, setDesignImageIndex] = useState<number>(0);

  return (<section id="details" className="py-80">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-primary font-light mb-30 md:mb-0 text-32">{design.name}</h3>
        <button className="btn btn-primary shadow-primary btn-mini btn-sm-block" onClick={() => smoothScrollTo('kits', 300)}>Choose another design</button>
      </div>

      <div className="flex flex-col lg:flex-row mt-40">
        <div className="w-full lg:w-5/12 order-2 lg:order-1 mb-30 lg:mb-0 pr-0 lg:pr-15">
          <p className="mb-30 text-center md:text-left">{design.comment}</p>
          <p className="text-primary text-18 mb-20 text-center md:text-left">What&apos;s included in your kit</p>
          <ul className="text-light-400 font-medium">
            {components.map((component, index) => (<li className="mb-15" key={index}>
              <p className="mb-0 font-bold">{component.title}</p>
              {component.options.map((option, j) => <p className="pl-20 mb-0" key={j}>{option}</p>)}
            </li>))}
          </ul>

          <p className="text-primary text-18 mt-30 text-center md:text-left">You will also get</p>
          <ul className="text-light-400 font-medium mt-20">
            <li>2D Digital blueprints and 3D designs;</li>
            <li>A video walkthrough;</li>
            <li>All the materials you will need for installation;</li>
            <li>Installation guides.</li>
          </ul>

          <p className="text-primary text-18 mt-30 mb-20 text-center md:text-left">Materials</p>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-20">
            {design.kitColors.map((color, index) => (<div className="mb-20" key={index}>
              <div className="rounded-lg border border-light p-10 shadow-secondary">
                <Image className="rounded-md overflow-hidden" src={color.image} width={120} height={78} alt={color.name} layout="responsive" placeholder="blur" blurDataURL={shimmerUrl} />
                <p className="text-warning text-center text-10 pt-10 mb-0">{color.name}</p>
                <p className="text-light-400 text-center text-12 font-medium mb-0">{color.color}</p>
              </div>
            </div>))}
          </div>
        </div>

        <div className="w-full lg:w-7/12 order-1 lg:order-2 pl-0 lg:pl-15">
          <div className="sticky top-0 pt-20">
            <div className="relative cursor-pointer" onClick={() => imagePreviewService.preview(design.normalImages[designImageIndex], design.name)}>
              <Image className="rounded-lg overflow-hidden" src={design.normalImages[designImageIndex]} width={560} height={465} layout="responsive" alt={design.name} placeholder="blur" blurDataURL={shimmerUrl} />
              <Icon name="external_link" color="white" size={24} className="absolute bottom-20 right-20 cursor-pointer" />
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 mt-20 gap-20">
              {design.thumbnailImages.map((designImage, index) => (
                <div
                  key={index}
                  className={"border-4 rounded-xl cursor-pointer overflow-hidden" + (designImageIndex === index ? " border-primary" : " border-white")}
                  onClick={() => setDesignImageIndex(index)}
                >
                  <Image src={designImage} width={91} height={82} layout="responsive" placeholder="blur" blurDataURL={shimmerUrl} alt="design" /></div>
                ))}
            </div>

            <div className="mt-30 md:mt-50 flex flex-col md:flex-row justify-between items-center">
              <p className="text-24 text-primary mb-20 md:mb-0"><Currency value={design.price} /></p>
              <div className="w-full md:w-auto btn-sm-block-group mb-30 md:mb-0">
                <button className="hidden btn btn-primary btn-md mr-20" onClick={() => {
                  // TODO: navigate to customize kit section
                }}>Customize Kit</button>
                <button className="btn btn-warning btn-md" onClick={() => buyKitService.buy(design.name)}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
}
