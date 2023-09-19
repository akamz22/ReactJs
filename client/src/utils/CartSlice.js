import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.items.findIndex(
                (item) => item.id === newItem.id
            );
            if (existingItemIndex !== -1) {
                // If item already exists, increase quantity or initialize it to 1
                const existingItem = state.items[existingItemIndex];
                state.items[existingItemIndex] = {
                    ...existingItem,
                    quantity: (existingItem.quantity || 0) + 1, // Initialize to 0 if undefined
                };
            } else {
                // If item doesn't exist, add it with quantity 1
                state.items.push({
                    ...newItem,
                    quantity: 1,
                });
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
    },
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;