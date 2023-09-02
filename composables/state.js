export const useCart = () => useState(() => []);

export const useAuth = () =>
  useState(() => {
    isAuth: false;
  });
