import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Product interface
interface Product {
    id: string;
    name: string;
    category: string;
}

// Slice state interface
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
            state.products.push(action.payload);
        },
    },
});

export const { addProduct } = storeSlice.actions;

export default storeSlice.reducer;
