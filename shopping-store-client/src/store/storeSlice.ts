import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
    id: string;
    name: string;
    category: string;
}

interface StoreState {
    products: Product[];
}

const initialState: StoreState = {
    products: [],
};

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload); // הוספת מוצר ל-state
        },
    },
});

export const { addProduct } = storeSlice.actions;
export default storeSlice.reducer;
