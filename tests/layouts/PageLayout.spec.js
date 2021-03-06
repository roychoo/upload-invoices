import React from 'react'
import PageLayout from 'layouts/PageLayout/PageLayout'
import { shallow } from 'enzyme'

describe('(Layout) PageLayout', () => {
  it.skip('renders as a <div>', () => {
    shallow(<PageLayout />).should.have.tagName('div')
  })

  it.skip('renders a project title', () => {
    shallow(<PageLayout />).find('h1').should.have.text('React Redux Starter Kit')
  })

  it.skip('renders its children inside of the viewport', () => {
    const Child = () => <h2>child</h2>
    shallow(
      <PageLayout>
        <Child />
      </PageLayout>
    )
      .find('.page-layout__viewport')
      .should.contain(<Child />)
  })
})
