import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlices = createSlice({
  name: "wishlist",
  initialState: {
    favourites: [],
  },
  reducers: {
    toggleFavourit: (state, action) => {
      const itemIndex = state.favourites.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.favourites.splice(itemIndex, 1);
      } else {
        state.favourites.push(action.payload);
      }
    },
  },
});

export const { toggleFavourit } = wishlistSlices.actions;
export default wishlistSlices.reducer;
