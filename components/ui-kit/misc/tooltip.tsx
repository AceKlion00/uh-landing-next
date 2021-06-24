import Icon from '../icon';

interface Props {
  content: string;
}

export default function Tooltip({ content }: Props) {
  return (<span className="has-tooltip relative">
    <Icon name="info" color="#07a39d" size={15} className="cursor-pointer" />
    <span className="tooltip min-w-320 max-w-550 rounded-md bg-white text-12 border border-light-200 w-200">{content}</span>
  </span>);
}
