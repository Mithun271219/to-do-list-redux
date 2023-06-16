import React from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'

import { addToda, selectTasks } from '@/Redux/slices/Task.slice'

function Modal() {

    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks)

    let initialValues = {
        title: "",
        status: 'incomplete'
    }

    let { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid } = useFormik({
        initialValues,
        onSubmit: (values, { resetForm }) => {
            dispatch(addToda(values))
            resetForm();
        }
    })

    return (
        <>
            <div className="modal fade" style={{ color: 'black' }} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Task</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body d-flex">
                                <input type="text" name='title' placeholder='Task Title' className="form-control" id="taskName" value={values.title} onChange={handleChange} />
                                <label htmlFor="taskStatus" className="form-label">
                                    Status
                                </label>
                                <select className="form-select" id="taskSstatus" name='status' value={values.status} onChange={handleChange}  >
                                    <option value="incomplete">Incomplete</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal