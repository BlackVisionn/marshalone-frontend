import { create } from 'zustand';

interface ModalState {
  isLoginModalOpen: boolean;
  isRegistrationModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openRegistrationModal: () => void;
  closeRegistrationModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isLoginModalOpen: false,
  isRegistrationModalOpen: false,
  openLoginModal: () => set({ isLoginModalOpen: true }),
  closeLoginModal: () => set({ isLoginModalOpen: false }),
  openRegistrationModal: () => set({ isRegistrationModalOpen: true }),
  closeRegistrationModal: () => set({ isRegistrationModalOpen: false }),
}));
