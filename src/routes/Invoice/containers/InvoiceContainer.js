import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { dropInvoice, getInvoices, getInvoicesSelector } from '../modules/invoice'
import InvoiceUpload from '../components/InvoiceUpload'

class InvoiceContainer extends Component {
  static propTypes = {
    getInvoices: PropTypes.func.isRequired,
    invoices: PropTypes.array.isRequired,
    dropInvoice: PropTypes.func.isRequired,
    isUploading: PropTypes.bool.isRequired
  }
  componentDidMount () {
    this.props.getInvoices()
  }

  render () {
    const {
      invoices,
      dropInvoice,
      isUploading
    } = this.props
    return (
      <InvoiceUpload
        invoices={invoices}
        onDrop={dropInvoice}
        isUploading={isUploading}
      />
    )
  }
}

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapDispatchToProps = {
  // increment : () => increment(1),
  getInvoices,
  dropInvoice
}

const mapStateToProps = (state) => ({
  invoices : getInvoicesSelector(state),
  isLoading: state.invoice.isLoading,
  isUploading: state.invoice.isUploading
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceContainer)
