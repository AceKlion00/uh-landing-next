interface Props {
  kitTypeId: string;
  seriesTypeId: string;
}

export default function KitSeries({ kitTypeId, seriesTypeId }: Props) {
  return (<div>{kitTypeId} - {seriesTypeId}</div>);
}

export async function getServerSideProps(context: any) {
  const { kitTypeId, seriesTypeId } = context.query;
  return {
    props: { kitTypeId, seriesTypeId }
  };
}
