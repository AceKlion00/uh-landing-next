import { noop } from '../../../core/types';

interface Props {
  id: string;
  name: string;
  label: string;
  value: boolean;
  onChange: (v: any) => void;
}

export function CheckBox({ id, name, label, value, onChange }: Props) {
  return (<label className="flex items-center cursor-pointer relative">
    <input
      id={id || name}
      name={name}
      type="checkbox"
      value={String(value)}
      onChange={onChange}
      className="opacity-0"
    />
    <span className={"w-15 h-15 bg-white absolute left-0" + (value ? " border-primary bg-primary" : " border-2 border-light-400")} />
    {value && <span className="absolute left-5 top-5 w-5 h-10 border-white border-r-2 border-b-2 transform rotate-45" />}
    <span className="pl-10">{label}</span>
  </label>);
}

CheckBox.defaultProps = {
  id: '',
  label: '',
  value: false,
  onChange: noop,
};
