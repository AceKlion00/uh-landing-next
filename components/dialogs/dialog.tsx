import { ReactNode } from 'react';
import Modal from 'react-modal'

import { modalCustomStyles } from './consts';

Modal.setAppElement('#__next');

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Dialog(props: Props) {
  return (<Modal
    isOpen={props.isOpen}
    style={modalCustomStyles}
    shouldCloseOnOverlayClick={true}
    shouldCloseOnEsc={true}
    onRequestClose={props.onClose}
    closeTimeoutMS={300}
  >
    {props.children}
  </Modal>);
}
