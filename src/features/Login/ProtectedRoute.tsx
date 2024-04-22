'use client'
import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';
import { useAuthStore } from './api/useAuthStore';
import Home from '@/app/page';
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    
    if (!isAuthenticated) {
      router.push('/'); // Redirect to login page if not authenticated
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? children : <Home />;
};

export default ProtectedRoute;
