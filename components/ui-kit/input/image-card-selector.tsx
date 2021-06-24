import Image from 'next/image';

import { noop, ProjectAccessoryType } from '../../../core/types';
import { shimmerUrl } from '../common/blur-image';

interface Props {
  name: string;
  cols: number;
  value: string[];
  options:ImageCardOption[],
  onChange: (v: any) => void;
}

interface ImageCardOption {
  value: ProjectAccessoryType;
  label: string;
  image: string;
  selected?: boolean;
}

export function ImageCardSelector({ name, cols, value, options, onChange }: Props) {
  options?.map(option => {
    if (value?.indexOf(option.value) > -1) {
      option.selected = true;
    }
  });
  const selectCard = (item: ImageCardOption) => {
    item.selected = !item.selected;
    onChange({ target: { name, value: options.filter(x => x.selected).map(x => x.value) } });
  }
  return (<div className="flex flex-col md:flex-row flex-wrap">
    {options.map((option, index) => {
      return(<div key={ index } className={'w-full md:w-' + (12/cols).toString() + '/12 px-5'}>
        <div className={'transition-all duration-300 ease-in-out border border-light relative rounded-lg shadow-lg cursor-pointer px-10 pt-10 mb-20 hover:bg-primary hover:text-white hover:border-primary' + (option.selected ? ' bg-primary text-white border-primary' : 'text-light-400')} onClick={ () => {selectCard(option);} }>
          <div className="rounded-md overflow-hidden">
            <Image src={option.image} width={70} height={45} layout="responsive" objectFit="cover" placeholder="blur" blurDataURL={shimmerUrl} alt="Idea" />
          </div>
          <div className="font-medium my-10 text-center">
            {option.label}
          </div>
        </div>
      </div>);
    })}
  </div>);
}

ImageCardSelector.defaultProps = {
  cols: 3,
  value: [],
  onChange: noop,
}