import { create } from 'zustand';

interface AuthStore {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  registerVerification: boolean;
  setRegisterVerification: (cond: boolean) => void;
  verificationToken: string;
  setVerificationToken: (token: string) => void;
  loginModalOpen: boolean;
  setLoginModalOpen: (cond: boolean) => void;
  authModalOpen: boolean;
  setAuthModalOpen: (cond: boolean) => void;
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  refreshToken: string | null;
  setRefreshToken: (token: string | null) => void;
}

export const useAuthStore = create<AuthStore>(set => ({
  isAuthenticated: false,
  token: null,
  login: (token: string) => {
    set({ isAuthenticated: true, token });
    localStorage.setItem('accessToken', token);
  },
  logout: () => {
    set({ isAuthenticated: false, token: null });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },
  registerVerification: false,
  setRegisterVerification: (cond: boolean) => set({ registerVerification: cond }),
  verificationToken: '',
  setVerificationToken: (token: string) => set({ verificationToken: token }),
  loginModalOpen: false,
  setLoginModalOpen: (cond: boolean) => set({ loginModalOpen: cond }),
  authModalOpen: false,
  setAuthModalOpen: (cond: boolean) => set({ authModalOpen: cond }),
  accessToken: localStorage.getItem('accessToken'),
  setAccessToken: (token: string | null) => {
    if (token) {
      localStorage.setItem('accessToken', token);
    } else {
      localStorage.removeItem('accessToken');
    }
    set({ accessToken: token });
  },
  refreshToken: localStorage.getItem('refreshToken'),
  setRefreshToken: (token: string | null) => {
    if (token) {
      localStorage.setItem('refreshToken', token);
    } else {
      localStorage.removeItem('refreshToken');
    }
    set({ refreshToken: token });
  },
}));
