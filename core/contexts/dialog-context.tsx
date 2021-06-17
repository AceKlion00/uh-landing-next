import { createContext, ReactNode, useContext, useState } from 'react';

import { Dialog } from '../../components/dialogs/dialog';
import { ScheduleConsultationDialog } from '../../components/dialogs/schedule-consultation-dialog';

type dialogContextType = {
  dialogOpened: boolean,
  openDialog: () => any,
  closeDialog: () => any,
};

const dialogContextDefaultValues: dialogContextType = {
  dialogOpened: false,
  openDialog: () => {},
  closeDialog: () => {},
};

const DialogContext = createContext<dialogContextType>(dialogContextDefaultValues);

export function useDialog() {
  return useContext(DialogContext);
}

type Props = {
  children: ReactNode;
}

export function DialogProvider({ children }: Props) {
  const [dialogOpened, setDialogOpened] = useState(false);
  const openDialog = () => setDialogOpened(true);
  const closeDialog = () => setDialogOpened(false);
  const value = { dialogOpened, openDialog, closeDialog };

  return (
    <>
      <DialogContext.Provider value={value}>
        {children}
        <Dialog isOpen={dialogOpened} children={<ScheduleConsultationDialog />} />
      </DialogContext.Provider>
    </>
  )
}
