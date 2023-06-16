import { createSlice } from "@reduxjs/toolkit";
import { defaultHead } from "next/head";

export const fliteredTasksSlice = createSlice({
    name: "filteredTasks",
    initialState: {
        value: []
    },
    reducers: {
        doFilter: (state, action) => {
            let { tasks, filterValue = 'all' } = action.payload;
            let selectedFilter = filterValue || 'all';
            if (selectedFilter === 'completed') {
                state.value = tasks.filter(task => task.status === 'completed')
            } else if (selectedFilter === 'incomplete') {
                state.value = tasks.filter(task => task.status === 'incomplete')
            } else {
                state.value = tasks
            }
        }
    }
})

export const { doFilter } = fliteredTasksSlice.actions;

export const selectFiltered = (state) => state.filteredTasks.value;

export default fliteredTasksSlice.reducer;