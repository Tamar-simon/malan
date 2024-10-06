import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of your product data
interface Product {
    id: string; // Assuming each product has a unique ID
    name: string;
    category: string;
}

// Define the shape of your slice state
interface StoreState {
    products: Product[];
}

const initialState: StoreState = {
    products: [], // Initial state with an empty array of products
};

// Create a slice of the store
const storeSlice = createSlice({
    name: 'store', // Name of the slice
    initialState,
    reducers: {
        // Action to add a product
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload); // Add the new product to the array
        },
    },
});

// Export the action creator for adding a product
export const { addProduct } = storeSlice.actions;

// Export the reducer to be used in the store configuration
export default storeSlice.reducer;
