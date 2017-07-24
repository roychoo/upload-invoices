import React from 'react'
import PropTypes from 'prop-types'
import { Motion, spring } from 'react-motion'
// import FlipMove from 'react-flip-move'

import InvoiceRow from './InvoiceRow'
import './Invoices.scss'

export const Invoices = ({ invoices }) => (
  <div style={{ width: '100%', position: 'relative' }}>
    <div className='list-header'>
      <div className='list-item'>Invoice No.</div>
      <div className='list-item'>Date</div>
      <div className='list-item'>Amount</div>
      <div className='list-item'>Status</div>
    </div>
    {
      invoices.map((invoice, index) => (
        <Motion key={invoice.id} defaultStyle={{ y: 0 }} style={{ y: spring(index * 44) }} >
          {
            (value) => (
              <div style={{
                position: 'absolute',
                width: '100%',
                transform: `translate3d(0, ${value.y}px, 0)`
              }}>
                <InvoiceRow invoice={invoice} />
              </div>
            )
          }
        </Motion>
      ))
    }
  </div>
)

Invoices.propTypes = {
  invoices: PropTypes.array.isRequired
}

export default Invoices
