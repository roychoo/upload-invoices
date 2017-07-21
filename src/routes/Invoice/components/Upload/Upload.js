import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import './Upload.scss'
import UploadStatusIcon from '../UploadStatusIcon'
import Progress from '../Progress'

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

  onDrop = () => {
    this.setState({ onHover: false })
    this.props.onDrop()
  }

  render () {
    return (
      <div className='upload-container'>
        <Dropzone
          onDrop={this.onDrop}
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
          className='dropzone'
        >
          <Progress
            uploadStarted={this.props.uploadStarted}
            uploadDone={this.props.uploadDone}
          />
          {
            !this.props.uploadStarted ? (
              <UploadStatusIcon status={this.state.onHover} />
            ) : ''
          }
        </Dropzone>
      </div>
    )
  }
}

Upload.propTypes = {
  onDrop: PropTypes.func.isRequired,
  uploadStarted: PropTypes.bool.isRequired,
  uploadDone: PropTypes.bool.isRequired
}

export default Upload
