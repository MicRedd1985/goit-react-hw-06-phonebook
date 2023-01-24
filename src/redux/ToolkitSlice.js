import { createSlice } from '@reduxjs/toolkit';

export const contactsFilterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter(state, action) {
            return (state = action.payload);
        },
    },
});

export const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
    },
});

export const { setFilter } = contactsFilterSlice.actions;
export const { add, remove } = itemsSlice.actions;