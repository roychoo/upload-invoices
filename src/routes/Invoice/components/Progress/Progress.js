import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Progress.scss'

export class Progress extends Component {
  constructor (props) {
    super(props)
    this.animating = true
    this.isMinAnimating = true
    this.isHourAnimating = true
    this.state = {
      animating: true,
      showPreloader: true,
      showProgress: props.isUploading,
      animateToCheckMark: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.isUploading && !nextProps.isUploading) {
      this.animating = false
    } else if (nextProps.isUploading) {
      this.setState({ showProgress: true })
    }
  }

  componentDidMount () {
    this.prefixEventHandler(this.before, 'AnimationIteration', this.handleAnimationIteration)
    this.prefixEventHandler(this.after, 'AnimationIteration', this.handleAnimationIteration)
    this.prefixEventHandler(this.preloader, 'AnimationEnd', this.handleAnimationIteration)
  }

  componentWillUnmount () {
    this.prefixEventHandler(this.before, 'AnimationIteration', this.handleAnimationIteration, true)
    this.prefixEventHandler(this.after, 'AnimationIteration', this.handleAnimationIteration, true)
    this.prefixEventHandler(this.preloader, 'AnimationEnd', this.handleAnimationIteration, true)
  }

  handleAnimationIteration = (e) => {
    if (e.animationName === 'minute' && !this.animating) {
      this.isMinAnimating = false
    }
    if (e.animationName === 'hour' && !this.animating) {
      this.isHourAnimating = false
    }
    if (!this.state.animateToCheckMark && !this.isHourAnimating && !this.isMinAnimating) {
      this.setState({ animateToCheckMark: true })
      this.setState({ animating: false })
    }
    if (e.animationName === 'checkmark') {
      this.props.uploadedAnimationDone()
    }
  }

  prefixEventHandler (node, name, handler, remove) {
    const prefixes = ['webkit', 'moz', 'MS', 'o', '']
    for (var i = 0; i < prefixes.length; i++) {
      const eventName = (prefixes[i] === '') ? name.toLowerCase() : prefixes[i] + name
      if (!remove) {
        node.addEventListener(eventName, handler)
      } else {
        node.removeEventListener(eventName, handler)
      }
    }
  }

  render () {
    const beforeClass = classNames({
      'before': this.state.showPreloader,
      'before-animate': this.state.animating,
      'before-checkmark': this.state.animateToCheckMark
    })

    const afterClass = classNames({
      'after': this.state.showPreloader,
      'after-animate': this.state.animating,
      'after-checkmark': this.state.animateToCheckMark
    })
    const preloaderClass = classNames({
      'preloader': this.state.showPreloader,
      'show': this.state.showProgress,
      'preloader-checkmark': this.state.animateToCheckMark
    })
    return (
      <div className={preloaderClass} ref={(preloader) => { this.preloader = preloader }}>
        <div ref={(before) => { this.before = before }} className={beforeClass} />
        <div ref={(after) => { this.after = after }} className={afterClass} />
      </div>
    )
  }
}

Progress.propTypes = {
  isUploading: PropTypes.bool.isRequired,
  uploadedAnimationDone: PropTypes.func.isRequired
}

export default Progress
