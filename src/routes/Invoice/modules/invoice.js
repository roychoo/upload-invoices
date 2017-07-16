// ------------------------------------
// Constants
// ------------------------------------
export const GET_INVOICES_STARTED = 'GET_INVOICES_STARTED'
export const GET_INVOICES_DONE = 'GET_INVOICES_DONE'
// export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'

// ------------------------------------
// Actions
// ------------------------------------
export function getInvoicesStarted () {
  return {
    type    : GET_INVOICES_STARTED
  }
}

export function getInvoicesDone (invoices) {
  return {
    type    : GET_INVOICES_DONE,
    payload: invoices
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const getInvoices = () => {
  return (dispatch, getState) => {
    dispatch(getInvoicesStarted())
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(getInvoicesDone(
          [
            {
              id: 'IV-' + Math.floor(Math.random() * 89999 + 10000).toString(), // generating random id.
              date: new Date().toISOString().slice(0, 10), // TODO: better formating
              amount: Math.floor(Math.random() * 89999 + 10000),
              currency: 'SGD',
              status: 0
            },
            {
              id: 'IV-' + Math.floor(Math.random() * 89999 + 10000).toString(), // generating random id.
              date: new Date().toISOString().slice(0, 10), // TODO: better formating
              amount: Math.floor(Math.random() * 89999 + 10000),
              currency: 'SGD',
              status: 1
            },
            {
              id: 'IV-' + Math.floor(Math.random() * 89999 + 10000).toString(), // generating random id.
              date: new Date().toISOString().slice(0, 10), // TODO: better formating
              amount: Math.floor(Math.random() * 89999 + 10000),
              currency: 'SGD',
              status: 2
            },
          ]
        ))
        resolve()
      }, 1000)
    })
  }
}

export const actions = {
  getInvoices
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_INVOICES_STARTED]    : (state) => ({ ...state, isLoading: true }),
  [GET_INVOICES_DONE] : (state, { payload }) => {
    const invoices = payload.reduce((acc, cur) => {
      acc[cur.id] = cur
      return acc
    }, {})
    return {
      ...state,
      invoices
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isLoading: false,
  invoices: {}
}
// selectors
//
export function getInvoicesSelector (state) {
  return Object.keys(state.invoice.invoices).map((key) => state.invoice.invoices[key])
}

export default function invoiceReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
