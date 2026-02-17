import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User, LoginCredentials } from '../types';


const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginCredentials>) => {
            state.loading = true;

            const mockUser: User = {
                id: '1',
                email: action.payload.email,
                name: action.payload.email.split('@')[0],
            };

            state.user = mockUser;
            state.isAuthenticated = true;
            state.loading = false
        },

        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false
            state.loading = false;
        },

        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    }
});

export const { login, logout, setLoading } = authSlice.actions;
export default authSlice.reducer;