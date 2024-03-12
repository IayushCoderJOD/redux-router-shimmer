import { createSlice, isAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items_count: 0
    },
    reducers: {
        increaseItems: (state) => {
            state.items_count = state.items_count + 1;
        },
        removeItems: (state) => {
            if (state.items_count > 0)
                state.items_count = state.items_count - 1;
            else {
                alert("cart is empty")
            }
        }
        ,
        clearCart: (state) => {
            state.items_count = 0;
        }
    }
})

export const { increaseItems, clearCart, removeItems } = cartSlice.actions;
export default cartSlice.reducer;