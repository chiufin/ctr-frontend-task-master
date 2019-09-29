import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BeerImage from './BeerImage'
import { getBeerList } from '../apis'

const BeerListPage: React.FC = () => {
  const [beers, setBeers] = useState([])
  useEffect(() => {
    getBeerList().then((json) => setBeers(json))
  }, [])
  return (
    <>
      {beers.map((beer) => {
        const { id, name, abv, tagline, image_url } = beer
        return (
          <Link to={`/${id}`} key={`beer-${id}`}>
            <div style={{ border: '1px solid #000' }}>
              <p>{name}</p>
              <p>{abv}</p>
              <p>Tagline: {tagline}</p>
              <BeerImage src={image_url} />
            </div>
          </Link>
        )
      })}
    </>
  )
}

export default BeerListPage
