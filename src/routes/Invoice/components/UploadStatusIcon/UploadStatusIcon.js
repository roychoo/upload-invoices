/* eslint-disable max-len */

import React, { Component } from 'react'
import GSAP from 'react-gsap-enhancer'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './UploadStatusIcon.scss'

function createAnim ({ target }) {
  const arrow = target.find({ name: 'arrow' })
  const t1 = new TimelineMax({
    repeat: -1,
    repeatDelay: 0
  })

  return t1.set(arrow, { y: 60 })
    .to(arrow, 1, { y: -20 })
}

export class UploadStatusIcon extends Component {
  componentDidMount () {
    this.jumpAnim = this.addAnimation(createAnim)
    this.jumpAnim.paused(true)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.status) {
      this.jumpAnim.play()
    } else {
      this.jumpAnim.restart(0).pause(0)
    }
  }

  render () {
    const baseClassnames = classNames({
      'base': true,
      'hover': this.props.status
    })

    return (
      <div style={{ width: '2rem', height: '2rem' }} className={this.props.className}>
        <svg viewBox='0 0 500 500' x='0px' y='0px' style={{ width: '100%', height: '100%' }}>
          <g>
            <path className={baseClassnames} name='base' d='M457.7,230.15c-7.5,0-13.5,6-13.5,13.5v122.8c0,33.4-27.2,60.5-60.5,60.5H87.5c-33.4,0-60.5-27.2-60.5-60.5v-124.8 c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v124.8c0,48.3,39.3,87.5,87.5,87.5h296.2c48.3,0,87.5-39.3,87.5-87.5v-122.8 C471.2,236.25,465.2,230.15,457.7,230.15z' />
            <path className={baseClassnames} name='arrow' ref={(el) => { this.arrow = el }} d='M159.3,126.15l62.8-62.8v273.9c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V63.35l62.8,62.8c2.6,2.6,6.1,4,9.5,4
          c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.8-85.8c-2.5-2.5-6-4-9.5-4c-3.6,0-7,1.4-9.5,4l-85.8,85.8
          c-5.3,5.3-5.3,13.8,0,19.1C145.5,131.35,154.1,131.35,159.3,126.15z' />
          </g>
        </svg>
      </div>
    )
  }
}

UploadStatusIcon.propTypes = {
  status: PropTypes.bool.isRequired,
  className: PropTypes.string
}

export default GSAP()(UploadStatusIcon)
