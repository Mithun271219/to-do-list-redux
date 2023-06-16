import React from 'react'
import Head from 'next/head';

import Button from './Button';
import Selector from './Selector';
import Tabel from './Tasks.list'
import Modal from './Modal';

function Tasks() {
    return (
        <div className='task-container'>
            <div className="card text-bg-secondary mb-3" >
                <div className="card-header d-flex justify-content-around">
                    <div>
                        <Button title={'Add Task'} />
                        <Modal />
                    </div>
                    <h4>To-Do-List</h4>
                    <div><Selector /></div>
                </div>
                <div className="card-body " style={{ width: 600 }}>
                    <Tabel />
                </div>
            </div>
        </div>
    )
}

export default Tasks