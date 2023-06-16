import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: [],
    },
    reducers: {
        addToda: (state, action) => {
            if (action.payload) {
                let id = Math.floor(Math.random() * 100000)
                let newTask = { ...action.payload, id: id, timeStamp: new Date().toLocaleString() }
                state.value.push(newTask)
            }
        },
        removeToda: (state, action) => {
            state.value.splice(action.payload, 1)
        },
        editToda: (state, action) => {
            const { status, index } = action.payload;
            state.value[index].status = status
        }
    }
})

export const { addToda, removeToda, editToda } = taskSlice.actions;

export const selectTasks = (state) => state.task.value;

export default taskSlice.reducer;

