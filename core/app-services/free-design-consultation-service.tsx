import { useDialog } from '../../components/ui-kit/dialog/dialog-context';
import { FreeDesignConsultationDialog } from '../../components/dialogs/free-design-consultation-form/free-design-consultation-dialog';

interface FreeConsultationService {
  showFreeDesignConsultationDialog: () => void,
}

export default function useFreeDesignConsultationService(): FreeConsultationService {
  const dialog = useDialog();

  const showFreeDesignConsultationDialog = () => {
    dialog.openDialog(<FreeDesignConsultationDialog/>);
  }

  return { showFreeDesignConsultationDialog };
}
