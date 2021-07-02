import { useDialog } from '../../components/ui-kit/dialog/dialog-context';
import { BuyKitDialog } from '../../components/dialogs/buy-kit-dialog';

interface BuyKitService {
  buy: (kitName: string) => void,
}

export default function useBuyKitService(): BuyKitService {
  const dialog = useDialog();

  const buy = (kitName: string) => {
    dialog.openDialog(<BuyKitDialog kitName={kitName}/>);
  };

  return { buy };
}
