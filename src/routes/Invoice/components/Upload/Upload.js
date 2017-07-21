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
      onHover: false,
      showUploadIcon: true
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!this.props.isUploading && nextProps.isUploading) {
      this.setState({ showUploadIcon: false })
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

  uploadedAnimationDone = () => {
    this.setState({ showUploadIcon: true })
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
          {
            this.state.showUploadIcon ? (
              <UploadStatusIcon status={this.state.onHover} />
            ) : (
              <Progress
                isUploading={this.props.isUploading}
                uploadedAnimationDone={this.uploadedAnimationDone}
              />
            )
          }
        </Dropzone>
      </div>
    )
  }
}

Upload.propTypes = {
  onDrop: PropTypes.func.isRequired,
  isUploading: PropTypes.bool.isRequired
}

export default Upload
