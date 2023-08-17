import React, { Component } from 'react'

export class ProgressBar extends Component {
    render() {
        const { size } = this.props
        return (
            <div className='mb-3 progress'>
                <div
                    className='progress-bar progress-bar-striped progress-bar-animated'
                    role='progressbar'
                    style={{ width: size }}>
                </div>
            </div>
        )
    }
}

export default ProgressBar