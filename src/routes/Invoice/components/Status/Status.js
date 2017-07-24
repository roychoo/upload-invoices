import React from 'react'
import PropTypes from 'prop-types'
// import { Motion, Spring } from 'react-motion'
import './Status.scss'

export const Status = ({ status }) => (
  <div>
    {
      status === 0 ? (
        <div className='pending'>
          Pending
        </div>
      ) : ''
    }
    {
      status === 1 ? (
        <div className='sucess'>
          Success
        </div>
      ) : ''
    }
    {
      status === 2 ? (
        <div className='failed'>
          Failed
        </div>
      ) : ''
    }
  </div>
)

Status.propTypes = {
  status: PropTypes.number.isRequired
}

export default Status
