import React from 'react'
import PropTypes from 'prop-types'
import Invoices from '../Invoices'
import Upload from '../Upload'
import './InvoiceUpload.scss'

export const InvoiceUpload = ({ onDrop, invoices, uploadStarted, uploadDone }) => (
  <div className='invoice-upload-container'>
    <Upload
      onDrop={onDrop}
      uploadStarted={uploadStarted}
      uploadDone={uploadDone}
    />
    <Invoices invoices={invoices} />
  </div>
)

InvoiceUpload.propTypes = {
  onDrop: PropTypes.func.isRequired,
  invoices: PropTypes.array.isRequired,
  uploadStarted: PropTypes.bool.isRequired,
  uploadDone: PropTypes.bool.isRequired
}

export default InvoiceUpload
