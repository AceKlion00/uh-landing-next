import { useDialog } from '../../components/ui-kit/dialog/dialog-context';
import { SupplierRequestDialog } from '../../components/dialogs/supplier-request-dialog';

interface PartnerRequestService {
  showSupplierRequestDialog: () => void,
}

export default function usePartnerRequestService() {
  const dialog = useDialog();

  const showSupplierRequestDialog = () => {
    dialog.openDialog(<SupplierRequestDialog/>);
  }

  return {
    showSupplierRequestDialog
  };
}
