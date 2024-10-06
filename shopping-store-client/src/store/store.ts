import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './storeSlice'; // עדכן את הנתיב בהתאם

export const store = configureStore({
    reducer: {
        store: storeReducer, // Adding the store reducer
    },
});

// Optional: RootState type for better TypeScript support
export type RootState = ReturnType<typeof store.getState>;
