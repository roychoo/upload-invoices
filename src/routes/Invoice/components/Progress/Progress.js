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
      animateToCheckMark: false
    }
  }
  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    if (nextProps.uploadDone) {
      this.animating = false
    } else if (nextProps.uploadStarted) {
      this.animating = true
    }
  }

  componentDidMount () {
    this.prefixEventHandler(this.before, 'AnimationIteration', this.handleAnimationIteration)
    this.prefixEventHandler(this.after, 'AnimationIteration', this.handleAnimationIteration)
  }

  handleAnimationIteration = (e) => {
    console.log(this.animating, this.isHourAnimating, this.isMinAnimating)
    if (e.animationName === 'minute' && !this.animating) {
      this.isMinAnimating = false
    }
    if (e.animationName === 'hour' && !this.animating) {
      this.isHourAnimating = false
    }
    if (!this.isHourAnimating && !this.isMinAnimating) {
      this.setState({ animateToCheckMark: true })
      this.setState({ animating: false })
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
      'before': true,
      'before-animate': this.state.animating,
      'before-checkmark': this.state.animateToCheckMark
    })

    const afterClass = classNames({
      'after': true,
      'after-animate': this.state.animating,
      'after-checkmark': this.state.animateToCheckMark
    })
    const preloaderClass = classNames({
      'preloader': true,
      'show': this.props.uploadStarted,
      'preloader-checkmark': this.state.animateToCheckMark
    })
    return (
      <div className={preloaderClass}>
        <div ref={(before) => { this.before = before }} className={beforeClass} />
        <div ref={(after) => { this.after = after }} className={afterClass} />
      </div>
    )
  }
}

Progress.propTypes = {
  uploadStarted: PropTypes.bool,
  uploadDone: PropTypes.bool
}

export default Progress
