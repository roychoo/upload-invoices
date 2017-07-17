import React from 'react'
import PropTypes from 'prop-types'
import Invoices from '../Invoices'
import Upload from '../Upload'
import './InvoiceUpload.scss'

export const InvoiceUpload = ({ onDrop, invoices }) => (
  <div className='invoice-upload-container'>
    <Upload onDrop={onDrop} />
    <Invoices invoices={invoices} />
  </div>
)

InvoiceUpload.propTypes = {
  onDrop: PropTypes.func.isRequired,
  invoices: PropTypes.array.isRequired
}

export default InvoiceUpload
