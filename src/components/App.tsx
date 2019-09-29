import React from 'react'
import { Route } from 'react-router-dom'

import BeerListPage from './BeerListPage'
import BeerDetailPage from './BeerDetailPage'

const App: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={BeerListPage} />
      <Route path="/:id" component={BeerDetailPage} />
    </>
  )
}

export default App
