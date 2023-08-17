import React, { Component } from 'react'

export class Confirm extends Component {
    render() {
        const { values, nextStep, prevStep } = this.props
        return (
            <>
                <h1>Confirm</h1>
                <ul className='list-group mb-4'>
                    <li className='list-group-item'>{values.firstName}</li>
                    <li className='list-group-item'>{values.lastName}</li>
                    <li className='list-group-item'>{values.occupation}</li>
                    <li className='list-group-item'>{values.city}</li>
                    <li className='list-group-item'>{values.bio}</li>
                </ul>
                <div className='d-grid gap-2'>
                    <button type='button' className='btn btn-primary' onClick={nextStep} >
                        Confirm
                    </button>
                    <button type='button' className='btn btn-secondary' onClick={prevStep} >
                        Previous
                    </button>
                </div>
            </>
        )
    }
}

export default Confirm