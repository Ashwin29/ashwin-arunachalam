// hooks/useModal.tsx
'use client';

import { useState, useCallback, JSX } from 'react';
import { Modal, ModalProps } from '../Modal';

interface UseModalReturn {
  isOpen: boolean;
  openModal: (props?: Partial<Omit<ModalProps, 'isOpen' | 'onClose'>>) => void;
  closeModal: () => void;
  RenderModal: () => JSX.Element | null;
}

/**
 * useModal - A reusable custom hook to manage modal state with built-in renderer
 */
export const useModal = (): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState<
    Partial<Omit<ModalProps, 'isOpen' | 'onClose'>>
  >({});

  const openModal = useCallback(
    (props: Partial<Omit<ModalProps, 'isOpen' | 'onClose'>> = {}) => {
      setModalProps(props);
      setIsOpen(true);
    },
    []
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalProps({});
  }, []);

  const RenderModal = useCallback(() => {
    if (!isOpen) return null;

    return (
      <Modal isOpen={isOpen} onClose={closeModal} title={modalProps.title}>
        {modalProps.children}
      </Modal>
    );
  }, [isOpen, modalProps, closeModal]);

  return {
    isOpen,
    openModal,
    closeModal,
    RenderModal,
  };
};
