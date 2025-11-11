export interface User {
    id: string
    username: string
    email: string
    created_at: string
}

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // actions
  login: (userData: User) => void;
  logout: () => Promise<void>;
  setLoading: (loading: boolean) => void;
  checkAuthStatus: () => Promise<void>;
  refreshUserData: () => Promise<void>;
  deleteUser: () => Promise<void>;
};

export interface GoogleButtonProps {
    onClick?: () => void;
    disabled?: boolean;
}

export interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export interface CardProps {
  children?: React.ReactNode
  className?: string
}

export interface PrimaryInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}