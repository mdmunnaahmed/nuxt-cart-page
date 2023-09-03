export const useCart = () => useState(() => []);

export const useAuth = () =>
  useState(() => ({
    isAuth: false,
  }));

export const usePageVisitCount = () => useState(() => 0);
