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

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter(contacts => contacts.id !== action.payload);
        },
    },
});

export const { setFilter } = contactsFilterSlice.actions;
export const { add, remove } = contactsSlice.actions;