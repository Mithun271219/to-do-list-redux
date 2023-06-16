import React from 'react'
import { MdOutlineDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { removeToda, selectTasks, editToda } from '@/Redux/slices/Task.slice'
import { selectFiltered } from '@/Redux/slices/Filter.tasks.slice'

function Taskslist() {


    const tasks = useSelector(selectTasks)
    const filteredTasks = useSelector(selectFiltered);
    const dispatch = useDispatch()

    let handelDelete = (index) => {
        dispatch(removeToda(index))
    }

    let handelEdit = (index => {
        let newData = tasks[index].status === 'completed' ? 'incomplete' : 'completed'
        dispatch(editToda({ status: newData, index: index }))
    })

    return (
        <>
            {
                tasks.length === 0 ? < h4 style={{ textAlign: 'center' }} > Add the tasks</ h4 >
                    :
                    <table className='table table-dark table-hover' >
                        <thead className='table-dark'>
                            <tr>
                                <th>Sl.no</th>
                                <th>Edit</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks?.map((ele, index) => {
                                    return (
                                        <tr key={ele.id}>
                                            <td>{index + 1}</td>
                                            <td><input checked={ele.status === "completed" ? true : false} className='form-check-box' type="checkbox" name="" id="" onChange={() => handelEdit(index)} /></td>
                                            <td>{ele.status === 'completed' ? <h6><s>{ele.title}</s></h6> : <h6><span>{ele.title}</span></h6>} <p style={{ fontSize: 13 }}>{ele.timeStamp}</p></td>
                                            <td>{ele.status === 'completed' ? <s>{ele.status}</s> : <span>{ele.status}</span>}</td>
                                            <td><button className='btn' onClick={() => handelDelete(index)}> <MdOutlineDelete style={{ color: "white" }} /></button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }
        </>
    )
}

export default Taskslist