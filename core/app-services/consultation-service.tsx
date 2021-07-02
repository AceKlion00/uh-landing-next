import { ScheduleConsultationDialog } from '../../components/dialogs/schedule-consultation-dialog';
import { useDialog } from '../../components/ui-kit/dialog/dialog-context';

interface ConsultationService {
  showConsultationDialog: () => void,
}

export default function useConsultationService(): ConsultationService {
  const dialog = useDialog();

  const showConsultationDialog = () => {
    dialog.openDialog(<ScheduleConsultationDialog/>);
  };

  return { showConsultationDialog };
}
