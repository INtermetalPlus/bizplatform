import { useAuthStore } from '../Login/api/useAuthStore';

export const useAuthMiddleware = () => {
  const { isAuthenticated } = useAuthStore();

  return (next: any) => (args: any) => {
    if (!isAuthenticated) {
      // Если пользователь не аутентифицирован, можно выбросить ошибку, перенаправить на страницу входа или выполнить другие действия
      throw new Error('Unauthorized access!');
    }
    return next(args);
  };
};
