interface Props {
  kitTypeId: string;
  seriesTypeId: string;
  kitDesignId: string;
}

export default function DesignDetails({ kitTypeId, seriesTypeId, kitDesignId }: Props) {
  return (<div>{kitTypeId}-{seriesTypeId}-{kitDesignId}</div>);
}

export async function getServerSideProps(context: any) {
  const { kitTypeId, seriesTypeId, kitDesignId } = context.query;
  return {
    props: { kitTypeId, seriesTypeId, kitDesignId }
  };
}
