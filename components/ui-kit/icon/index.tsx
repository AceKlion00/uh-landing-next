import { hardscapesIcons } from './icons';

interface Props {
  name: string;
  color: string;
  size: number;
  className?: string;
}

export default function Icon({ name, color, size, className }: Props) {
  let __html = '';
  const icons = hardscapesIcons as any;
  if (icons[name]) {
    __html = icons[name](size, color);
  }
  const iconHtml = { __html };
  return (<span className={ 'inline-block ' + className } dangerouslySetInnerHTML={iconHtml} />);
}

Icon.defaultProps = {
  name: '',
  color: 'primary',
  size: 24
};
