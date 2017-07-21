import React from 'react'
import PropTypes from 'prop-types'
import Invoices from '../Invoices'
import Upload from '../Upload'
import './InvoiceUpload.scss'

export const InvoiceUpload = ({ onDrop, invoices, isUploading }) => (
  <div className='invoice-upload-container'>
    <Upload
      onDrop={onDrop}
      isUploading={isUploading}
    />
    <Invoices invoices={invoices} />
  </div>
)

InvoiceUpload.propTypes = {
  onDrop: PropTypes.func.isRequired,
  invoices: PropTypes.array.isRequired,
  isUploading: PropTypes.bool.isRequired
}

export default InvoiceUpload
