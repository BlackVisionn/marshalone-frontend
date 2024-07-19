// // src/store/index.ts
// import create from 'zustand';

// interface StoreState {
//   isAuthenticated: boolean;
//   user: User | null;
//   login: (user: User) => void;
//   logout: () => void;
//   isLoginModalOpen: boolean;
//   isRegistrationModalOpen: boolean;
//   openLoginModal: () => void;
//   closeLoginModal: () => void;
//   openRegistrationModal: () => void;
//   closeRegistrationModal: () => void;
// }

// export const useStore = create<StoreState>((set) => ({
//   isAuthenticated: false,
//   user: null,
//   login: (user) => set({ isAuthenticated: true, user }),
//   logout: () => set({ isAuthenticated: false, user: null }),
//   isLoginModalOpen: false,
//   isRegistrationModalOpen: false,
//   openLoginModal: () => set({ isLoginModalOpen: true }),
//   closeLoginModal: () => set({ isLoginModalOpen: false }),
//   openRegistrationModal: () => set({ isRegistrationModalOpen: true }),
//   closeRegistrationModal: () => set({ isRegistrationModalOpen: false }),
// }));
