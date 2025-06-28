import { useModalContext } from "@/components/modal/modal-context";

export const useModal = () => {
  const { openModal, closeModal } = useModalContext();

  return {
    openModal,
    closeModal,
  };
};
