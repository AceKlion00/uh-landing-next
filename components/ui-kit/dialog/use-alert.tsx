import { useDialog } from './dialog-context';
import { AlertAction, AlertDialog } from './alert-dialog';
import { DialogResult, DialogType } from './types';

interface AlertService {
  alert: (title: string, message: string, okCaption: string) => Promise<DialogResult>,
  yesNo: (title: string, message: string) => Promise<DialogResult>,
  custom: (title: string, message: string, actions: AlertAction[]) => Promise<DialogResult>,
}

export default function useAlert(): AlertService {
  const dialog = useDialog();

  const alert = (title: string, message: string, okCaption: string): Promise<DialogResult> => {
    return new Promise(resolve => {
      dialog.openDialog(<AlertDialog message={message} title={title} okCaption={okCaption} onClose={res => resolve(res)} />);
    });
  };

  const yesNo = (title: string, message: string): Promise<DialogResult> => {
    return new Promise(resolve => {
      dialog.openDialog(<AlertDialog message={message} title={title} onClose={res => resolve(res)} type={DialogType.Confirmation} />);
    });
  };

  const custom = (title: string, message: string, actions: AlertAction[]): Promise<DialogResult> => {
    return new Promise(resolve => {
      dialog.openDialog(<AlertDialog message={message} title={title} actions={actions} onClose={res => resolve(res)} type={DialogType.Custom} />);
    });
  };

  return { alert, yesNo, custom };
}
