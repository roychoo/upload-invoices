import React from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import './Upload.scss'

export const Upload = ({ onDrop }) => (
  <div className='upload-container'>
    <Dropzone
      onDrop={onDrop}
      className='dropzone'
    >
      <i className='fa fa-upload fa-2x' aria-hidden='true' />
    </Dropzone>
  </div>
)

Upload.propTypes = {
  onDrop: PropTypes.func.isRequired
}

export default Upload
