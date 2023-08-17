import React, { Component } from 'react'

export class FormUserDetails extends Component {
    render() {
        const { values, handleChange, nextStep } = this.props
        return (
            <>
                <h1>User Details</h1>
                <div className='mb-4'>
                    <input
                        type='text'
                        value={values.firstName}
                        name='firstName'
                        className='form-control'
                        placeholder='first name'
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type='text'
                        value={values.lastName}
                        name='lastName'
                        className='form-control'
                        placeholder='last name'
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type='email'
                        value={values.email}
                        name='email'
                        className='form-control'
                        placeholder='name@example.com'
                        onChange={handleChange}
                    />
                </div>
                <div className='d-grid gap-2'>
                    <button type='button' className='btn btn-primary' onClick={nextStep} >
                        Next
                    </button>
                </div>
            </>
        )
    }
}

export default FormUserDetails
