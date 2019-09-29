import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BeerImage from './BeerImage'
import { getBeerList } from '../apis'

type BeerType = {
  id: string
  name: string
  abv: string
  tagline: string
  image_url: string
}

type BeersType = Array<BeerType>

const BeerListPage: React.FC = () => {
  const [beers, setBeers] = useState<BeersType>([])
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
