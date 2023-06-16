import { configureStore } from "@reduxjs/toolkit";

import TaskSlice from "./slices/Task.slice";
import filterslice from "./slices/Filter.tasks.slice";

export default configureStore({
    reducer: {
        task: TaskSlice,
        filteredTasks: filterslice
    }
})  