import { StoreApi, create } from 'zustand';



interface AuthStore {
    isAuthenticated: boolean;
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
    registerVerification:boolean;
    setRegisterVerification : (cond:boolean) => void;
    verificationToken:string;
    setVerificationToken:(token:string) => void;
    loginModalOpen:boolean;
    setLoginModalOpen:(cond:boolean) => void;
    authModalOpen:boolean;
    setAuthModalOpen:(cond:boolean) => void;
  }

export const useAuthStore = create<AuthStore>(set => ({
  isAuthenticated: false,
  token: null,
  login: (token:string) => set({ isAuthenticated: true, token }),
  logout: () => set({ isAuthenticated: false, token: null }),
  registerVerification:false,
  setRegisterVerification : (cond:boolean) => set({ registerVerification: cond }),
  verificationToken:'',
  setVerificationToken:(token:string) => set({ verificationToken: token }),
  authModalOpen:false,
  loginModalOpen:false,
  setLoginModalOpen:(cond:boolean) => set({ loginModalOpen: cond }),
  setAuthModalOpen:(cond:boolean) => set({ authModalOpen: cond }),
}));
