import { useDialog } from '../../components/ui-kit/dialog/dialog-context';
import { ChooseKitTipDialog } from '../../components/dialogs/choose-kit-tip-dialog';

interface ChooseKitTipDialogService {
  showChooseKitTipDialog: () => void;
}

export default function useChooseKitTipDialogService(): ChooseKitTipDialogService {
  const dialog = useDialog();

  const showChooseKitTipDialog = () => {
    dialog.openDialog(<ChooseKitTipDialog />);
  };

  return { showChooseKitTipDialog };
}
