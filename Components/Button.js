import React from 'react'
import Modal from './Modal'

function Button(props) {
    return (
        <>
            <button type='button' className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop">{props.title}</button>
        </>
    )
}

export default Button