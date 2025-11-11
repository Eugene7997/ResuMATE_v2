import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authApi } from '@lib/services/api';
import type { User, AuthState } from '@lib/types/types';

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: true,

      login: (userData: User) => {
        set({ user: userData, isAuthenticated: true, isLoading: false });
      },

      logout: async () => {
        try {
          await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/signout`, {
            method: 'POST',
            credentials: 'include',
          });
        } catch (error) {
          console.error('Error in logout:', error);
        } finally {
          set({ user: null, isAuthenticated: false, isLoading: false });
        }
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      checkAuthStatus: async () => {
        try {
          set({ isLoading: true });

          const currentState = get();

          if (currentState.user && currentState.isAuthenticated) {
            try {
              const verifyData = await authApi.verifyUser();
              if (verifyData?.data?.user || verifyData?.user) {
                set({ isAuthenticated: true, isLoading: false });
                return;
              }
              console.log('User is not authenticated with the server');
            } catch (error) {
              console.log('Error in checking auth with server', error);
            }
          }
          console.log('No valid authentication, clearing auth state');
          set({ user: null, isAuthenticated: false, isLoading: false });
        } catch (error) {
          console.error('Auth check failed:', error);
          set({ user: null, isAuthenticated: false, isLoading: false });
        }
      },

      refreshUserData: async () => {
        try {
          const userData = await authApi.getCurrentUser();

          if (userData.data?.user) {
            set({
              user: userData.data.user,
              isAuthenticated: true,
              isLoading: false,
            });
          } else if (userData.user) {
            set({
              user: userData.user,
              isAuthenticated: true,
              isLoading: false,
            });
          }
        } catch (error) {
          console.error('Error refreshing user data:', error);
          // Try fallback to verify endpoint if getCurrentUser fails
          try {
            // Use the authApi helper for verification as a fallback
            const verifyData = await authApi.verifyUser();
            console.log('Verify endpoint data:', verifyData);
            if (verifyData.data?.user || verifyData.user) {
              set({
                user: verifyData.data?.user || verifyData.user,
                isAuthenticated: true,
                isLoading: false,
              });
            }
          } catch (fallbackError) {
            console.error('Fallback verify endpoint also failed:', fallbackError);
          }
        }
      },

      deleteUser: async () => {
        const { user } = get();
        if (!user || !user.id) {
          throw new Error('No user ID found for deletion');
        }
        try {
          await authApi.deleteUser(user.id);
          set({ user: null, isAuthenticated: false, isLoading: false });
        } catch (error) {
          console.error('Error deleting user:', error);
          throw error;
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
      }),
      onRehydrateStorage: () => {
        // After rehydration, we'll check auth status in checkAuthStatus
      },
    }
  )
);
