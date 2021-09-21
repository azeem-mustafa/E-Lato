import React, {useRef} from 'react'
import './_login.scss';
import { v4 as uuidV4} from 'uuid';


export default function Login({ onIdSubmit }) {
    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    function createNewId() {
        onIdSubmit(uuidV4())
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit} className='login__form'>
            <div className='login__form-flex'>
                <label className='login__label'>Enter Your ID</label>
                <input className='login__input' type='text' ref={idRef} required>

                </input>
            </div>
            <button type='submit' className='login__button'>Login</button>
            <button onClick={createNewId} variant='secondary' className='login__button-two'>Create New ID</button>
            </form>
        </div>
    )
}
