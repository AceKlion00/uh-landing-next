import { createContext, ReactNode, useContext, useState } from 'react';

import { Dialog } from '../../components/dialogs/dialog';

type dialogContextType = {
  openDialog: (dialog: ReactNode) => void,
};

const dialogContextDefaultValues: dialogContextType = {
  openDialog: (_: ReactNode) => {},
};

const DialogContext = createContext<dialogContextType>(dialogContextDefaultValues);

export function useDialog() {
  return useContext(DialogContext);
}

type Props = {
  children: ReactNode;
}

export function DialogProvider({ children }: Props) {
  const [openStatus, setOpenStatus] = useState<boolean[]>([]);
  const [dialogs, setDialogs] = useState<ReactNode[]>([]);
  const openDialog = (dialog: ReactNode) => {
    setDialogs([...dialogs, dialog]);
    setOpenStatus([...openStatus, true]);
  }
  const closeDialog = (index: number) => {
    const newOpenStatus = [...openStatus];
    newOpenStatus[index] = false;
    setOpenStatus(newOpenStatus);
  };
  const value = { openDialog };

  return (
    <>
      <DialogContext.Provider value={value}>
        {children}
        {dialogs.map((dialog, index) => <Dialog key={index} isOpen={openStatus[index]} onClose={() => closeDialog(index)} children={dialog} />)}
      </DialogContext.Provider>
    </>
  )
}
