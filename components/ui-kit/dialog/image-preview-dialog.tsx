import Image from 'next/image';
import { shimmerUrl } from '../common/blur-image';
import Icon from '../icon';



interface Props {
  src: string;
  alt: string;
  closeDialog: () => void;
}

export function ImagePreviewDialog({ src, alt, closeDialog }: Props) {
  return (<div className="w-screen h-screen md:w-600 md:h-345 lg:w-800 lg:h-460">
    <div className="absolute top-0 w-full flex justify-end z-10 pt-30 pr-30 md:pt-15 md:pr-15">
      <button className="px-5 pt-5 rounded-full overflow-hidden bg-white opacity-90" onClick={closeDialog}>
        <Icon name="close" color="#2c2c2c" size={14} />
      </button>
    </div>
    <div className="absolute top-0 w-full h-full flex items-center">
      <Image
        src={src}
        width={960}
        height={550}
        layout="intrinsic"
        objectFit="cover"
        alt={alt}
        placeholder="blur"
        blurDataURL={shimmerUrl}/>
    </div>
  </div>);
}

ImagePreviewDialog.defaultProps = {
  alt: '',
  closeDialog: () => {
  },
};
