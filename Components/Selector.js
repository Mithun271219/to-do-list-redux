import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doFilter, selectFiltered } from '@/Redux/slices/Filter.tasks.slice';
import { selectTasks } from '@/Redux/slices/Task.slice';

function Selector() {

    let dispatch = useDispatch();
    let tasks = useSelector(selectTasks);
    let tofilter = useSelector(selectFiltered)

    let handelFilter = ({ target: { value } }) => {
        dispatch(doFilter({ tasks: tasks, filterValue: value || 'all' }))
    }

    return (
        <>
            <select className='form-select ' name="" id="" disabled onChange={handelFilter}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
        </>
    )
}

export default Selector