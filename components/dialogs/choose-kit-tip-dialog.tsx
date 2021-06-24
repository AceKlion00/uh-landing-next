import Icon from '../ui-kit/icon';

interface Props {
  onClose: () => void,
  closeDialog: () => void, // DO NOT USE THIS. INTERNAL USE ONLY
}

const chooseKitTips = [
  {
    title: 'Determine the budget and size of your project',
    description: 'Choose a package that fits your budget. From the Economy to Executive series, we have kits for every yard. Next, choose a kit that will fit your property. <b class="text-warning">Please note that kit sizes can be customized to your yard.</b>'
  },
  {
    title: 'Select the style and look you want to achieve',
    description: 'Whether you like the kit exactly as it is laid out or you want to customize the material size, style, color or borders, we make it easy to customize your project so that it is exactly what you want.'
  },
  {
    title: 'Consult with our Hardscape Architect - <b class="text-primary">free of charge</b>',
    description: 'If you found a few kits that you like but not sure which one to choose, want to customize your kit further, or create a kit from scratch - contact us to get a free consultation. We will help you design a beautiful, functional, and affordable project. '
  },
];

export function ChooseKitTipDialog({ onClose, closeDialog }: Props) {
  return (
    <div className="max-w-945 py-20 md:py-55 px-20 md:px-75">
      <div className="flex justify-end">
        <button className="px-5 pt-5" onClick={() => { onClose(); closeDialog(); }}><Icon name="close" color="#2c2c2c" size={14} /></button>
      </div>
      <h3 className="text-24 md:text-33 text-primary text-center font-medium mb-20 md:mb-40">How To Choose Right Kit</h3>
      <div className="pretty-scroll max-h-90vh overflow-y-auto">
        {chooseKitTips.map((item: { title: string, description: string }, index: number) => (
          <div className="text-14 md:text-18 text-light-500 mb-20 md:mb-45" key={index}>
            <div className="flex">
              <div className="text-20 md:text-32 text-white w-40 md:w-60 h-40 md:h-60 flex-none flex justify-center items-center bg-primary rounded-xl">
                <span>0{index + 1}</span>
              </div>
              <div className="ml-25">
                <p className="font-bold mb-10" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ChooseKitTipDialog.defaultProps = {
  onClose: () => {},
  closeDialog: () => {},
}
