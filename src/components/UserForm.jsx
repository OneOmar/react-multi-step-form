import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'
import ProgressBar from './ProgressBar'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // Next step
    nextStep = (e) => {
        e.preventDefault()
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    // Prev step
    prevStep = (e) => {
        e.preventDefault()
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    // Handle Fiels change
    handleChange = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        const { step } = this.state
        const { firstName, lastName, email, occupation, city, bio } = this.state
        const values = { firstName, lastName, email, occupation, city, bio }

        switch (step) {
            case 1:
                return <>
                    <ProgressBar size='25%' />
                    <FormUserDetails
                        values={values}
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                    />
                </>
            case 2:
                return <>
                    <ProgressBar size='50%' />
                    <FormPersonalDetails
                        values={values}
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                </>
            case 3:
                return <>
                    <ProgressBar size='75%' />
                    <Confirm
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    />
                </>
            case 4:
                return <>
                    <ProgressBar size='100%' />
                    <Success />
                </>
            default:
                return
        }
    }
}

export default UserForm