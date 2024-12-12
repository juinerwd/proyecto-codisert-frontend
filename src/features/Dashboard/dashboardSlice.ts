import { createSlice } from '@reduxjs/toolkit';


const rolesSlice = createSlice({
    name: 'roles',
    initialState: {
        role: null, // null, 'lector', 'registro', 'superadmin'
    },
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload;
        },
    },
});

export const { setRole } = rolesSlice.actions;
export default rolesSlice.reducer;