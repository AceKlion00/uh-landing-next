import { hardscapesIcons } from './icons';

interface Props {
  name: string;
  color: string;
  size: number;
  className?: string;
}

export default function Icon({ name, color, size, className }: Props) {
  const iconHtml = { __html: hardscapesIcons[name](size, color) };
  return (<span className={ 'inline-block ' + className } dangerouslySetInnerHTML={ iconHtml }></span>);
}

Icon.defaultProps = {
  name: '',
  color: 'primary',
  size: 24
};
