import React, { Component } from 'react'

export class FormPersonalDetails extends Component {
    render() {
        const { values, handleChange, nextStep, prevStep } = this.props
        return (
            <>
                <h1>Personal Details</h1>
                <div className='mb-4'>
                    <input
                        type='text'
                        value={values.occupation}
                        name='occupation'
                        className='form-control'
                        placeholder='occupation'
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type='text'
                        value={values.city}
                        name='city'
                        className='form-control'
                        placeholder='city'
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type='text'
                        value={values.bio}
                        name='bio'
                        className='form-control'
                        placeholder='bio'
                        onChange={handleChange}
                    />
                </div>
                <div className='d-grid gap-2'>
                    <button type='button' className='btn btn-primary' onClick={nextStep} >
                        Next
                    </button>
                    <button type='button' className='btn btn-secondary' onClick={prevStep} >
                        Previous
                    </button>
                </div>
            </>
        )
    }
}

export default FormPersonalDetails