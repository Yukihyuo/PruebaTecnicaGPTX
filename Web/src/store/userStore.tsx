// stores/useUserTokenStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserTokenState {
    token: string | null;
    setToken: (token: string) => void;
    resetToken: () => void;
    isTokenPresent: () => boolean;
    decodeToken: () => Record<string, unknown> | null;
}

export const useUserTokenStore = create<UserTokenState>()(
    persist(
        (set, get) => ({
            token: null,

            setToken: (token: string) => set({ token }),

            resetToken: () => set({ token: null }),

            isTokenPresent: () => {
                const currentToken = get().token;
                return currentToken !== null && currentToken !== '';
            },

            decodeToken: () => {
                const token = get().token;
                if (!token) return null;

                try {
                    const payload = token.split('.')[1];
                    const decodedPayload = atob(payload);
                    return JSON.parse(decodedPayload);
                } catch (error) {
                    console.error('Error decoding token:', error);
                    return null;
                }
            }
        }),
        {
            name: 'user-token-storage', // Nombre para localStorage
            //   getStorage: () => localStorage, // (opcional) Por defecto usa localStorage
            version: 1 // Versión para posibles migraciones futuras
        }
    )
);