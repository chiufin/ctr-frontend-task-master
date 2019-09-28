import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import BeerListPage from './BeerListPage'
import BeerDetailPage from './BeerDetailPage'

const App: React.FC = () => {
  return (
    <>
      <h1>Beerbylon BAR</h1>
      <p>星期五下午全部免費，喝好喝滿</p>
      <Router>
        <div>
          <Route exact path="/" component={BeerListPage} />
          <Route path="/:id" component={BeerDetailPage} />
        </div>
      </Router>
    </>
  )
}

export default App
