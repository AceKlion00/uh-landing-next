interface Props {
  value: number | string;
}

export default function Currency({ value }: Props) {
  const v = Number(value);
  return <>${Number(v.toFixed()).toLocaleString()}</>;
}
