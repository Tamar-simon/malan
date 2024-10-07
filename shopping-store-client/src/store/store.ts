import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './storeSlice';

export const store = configureStore({
    reducer: {
        store: storeReducer,
    },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;
