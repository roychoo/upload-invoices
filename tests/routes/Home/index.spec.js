import InvoiceRoute from 'routes/Invoice'

describe.only('(Route) Invoice', () => {
  it('Should return a route configuration object', () => {
    expect(typeof InvoiceRoute({})).to.equal('object')
  })

  it('Should define a undefined route as it is root route', () => {
    expect(typeof InvoiceRoute({}).path).to.equal('undefined')
  })
})
