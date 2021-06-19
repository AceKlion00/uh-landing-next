import { useState } from 'react';
import Image from 'next/image';
import { KitDesign } from '../../core/types';

interface Props {
  kitTypeName: string;
  kitDesigns: KitDesign[];
  selected: number;
}

export default function KitDesignsListSection({ kitTypeName, kitDesigns, selected }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number>(selected);
  return (<section className="pt-110 pb-80 bg-light-50">
    <div className="container mx-auto">
      <div className="block md:flex justify-between items-center text-center mb-50">
        <h3 className="text-primary font-light">Choose your kit design</h3>
        <button className="btn btn-warning btn-md shadow-warning mt-10 sm:mt-0">How To Choose The Right Kit</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {kitDesigns.map((design, index) => (<div className="mb-30" key={index}>
          <div
            className={"border-4 bg0white rounded-lg p-10 cursor-pointer shadow-secondary " + (selectedIndex === index ? "border-primary" : "border-white")}
            onClick={() => setSelectedIndex(index)}
          >
            <Image className="rounded-md overflow-hidden" src={design.coverImage} width={510} height={336} alt={design.name} />
          </div>
          <div className="flex justify-between items-center pt-10 pb-5">
            <div className="flex flex-col">
              <span className="font-mdeium text-light-400 text-14">{kitTypeName}</span>
              <span className="text-18">Kit #{design.name}</span>
            </div>
            <span className="text-24 text-primary">{design.price}</span>
          </div>
        </div>))}
      </div>
    </div>
  </section>);
}
