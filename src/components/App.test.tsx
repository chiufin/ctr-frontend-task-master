import React from 'react'
import { Route } from 'react-router-dom'

import { renderWithRouter, fireEvent, waitForElement } from 'test-utils'
import App from './App'

describe('home', () => {
  it('links beer names to the detail view of the relevant beer', async () => {
    const { getByText, history } = renderWithRouter(
      <>
        <App />
        <Route
          path="/:id"
          render={({ match }) => <div>matching id: {match.params.id}</div>}
        />
      </>
    )

    const firstBeerHeader = await waitForElement(() => getByText('Buzz'))
    const leftClick = { button: 0 }
    fireEvent.click(firstBeerHeader, leftClick)
    expect(getByText('matching id: 1')).toBeTruthy()

    history.goBack()
    const lastBeerHeader = await waitForElement(() => getByText('Bad Pixie'))
    fireEvent.click(lastBeerHeader, leftClick)
    expect(getByText('matching id: 25')).toBeTruthy()
  })
})

describe('detail', () => {
  it('displays the description of the beer routed to', async () => {
    const startingRoute = '/7'
    const { getByText } = renderWithRouter(
      <>
        <App />
        <Route
          path="/:id"
          render={({ match }) => <div>matching id: {match.params.id}</div>}
        />
      </>,
      { route: startingRoute }
    )

    const description = await waitForElement(() =>
      getByText(
        'An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local.'
      )
    )

    expect(description).toBeTruthy()
  })
})
