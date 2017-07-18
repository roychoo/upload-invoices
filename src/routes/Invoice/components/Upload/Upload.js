import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import './Upload.scss'
import UploadStatusIcon from '../UploadStatusIcon'

export class Upload extends Component {
  constructor (props) {
    super(props)
    this.state = {
      onHover: false
    }
  }

  onDragEnter = () => {
    this.setState({ onHover: true })
  }

  onDragLeave = () => {
    this.setState({ onHover: false })
  }

  render () {
    return (
      <div className='upload-container'>
        <Dropzone
          onDrop={this.props.onDrop}
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
          className='dropzone'
        >
          <UploadStatusIcon status={this.state.onHover} />
        </Dropzone>
      </div>
    )
  }
}

Upload.propTypes = {
  onDrop: PropTypes.func.isRequired
}

export default Upload
