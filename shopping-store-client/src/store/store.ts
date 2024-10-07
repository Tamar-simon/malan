import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './storeSlice'; // ייבא את ה-reducer של המוצרים

// הגדרת ה-store
const store = configureStore({
    reducer: {
        store: storeReducer, // רדוסר המוצרים תחת המפתח 'store'
    },
});

// הגדרת RootState - סוג ה-state הגלובלי שלך
export type RootState = ReturnType<typeof store.getState>;

// ייצוא של store כדי להשתמש בכול האפליקציה
export default store;
