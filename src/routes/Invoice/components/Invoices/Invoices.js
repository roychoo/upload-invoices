import React from 'react'
import PropTypes from 'prop-types'
import FlipMove from 'react-flip-move'

import InvoiceRow from './InvoiceRow'
import './Invoices.scss'

export const Invoices = ({ invoices }) => (
  <FlipMove
    duration={750}
    easing='ease-out'
    className='invoices'
    enterAnimation='accordionVertical'
    leaveAnimation='accordionVertical'
  >
    <div className='list-header'>
      <div className='list-item'>Invoice No.</div>
      <div className='list-item'>Date</div>
      <div className='list-item'>Amount</div>
      <div className='list-item'>Status</div>
    </div>
    {
      invoices.map((invoice) => (
        <div key={invoice.id}>
          <InvoiceRow invoice={invoice} />
        </div>
      ))
    }
  </FlipMove>
)

Invoices.propTypes = {
  invoices: PropTypes.array.isRequired
}

export default Invoices
