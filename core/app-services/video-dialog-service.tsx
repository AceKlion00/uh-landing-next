import { useDialog } from '../../components/ui-kit/dialog/dialog-context';
import { VideoDialog } from '../../components/dialogs/video-dialog';
import useGAService from './ga-service';

interface VideoDialogService {
  play: (videoPath: string) => void,
}

export default function useVideoDialogService(): VideoDialogService {
  const gaService = useGAService();
  const dialog = useDialog();

  const play = (videoPath: string) => {
    gaService.event('Dialog Opened', 'Buy Kit Dialog Opened');
    gaService.modalView('Buy Kit Dialog');
    dialog.openDialog(<VideoDialog videoPath={videoPath} />);
  };

  return { play };
}
