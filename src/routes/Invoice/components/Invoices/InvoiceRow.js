import React from 'react'
import PropTypes from 'prop-types'
import Status from '../Status'

export const InvoiceRow = ({ invoice }) => (
  <div className='list-row'>
    <div className='list-item'>{ invoice.id }</div>
    <div className='list-item'>{ invoice.date.slice(0, 10) }</div>
    <div className='list-item'>{ invoice.amount }</div>
    <div className='list-item'>
      <Status status={invoice.status} />
    </div>
  </div>
)

InvoiceRow.propTypes = {
  invoice: PropTypes.object.isRequired
}

export default InvoiceRow
