import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BeerImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`

const BeerListPage: React.FC = () => {
  const [beers, setBeers] = useState([])
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((data) => data.json())
      .then((json) => {
        setBeers(json)
      })
  })
  return (
    <>
      {beers.map((beer) => (
        <Link to={`/${beer['id']}`}>
          <div style={{ border: '1px solid #000' }} key={`beer-${beer['id']}`}>
            <p>Name: {beer['name']}</p>
            <p>Tagline: {beer['tagline']}</p>
            <BeerImage src={beer['image_url']} />
          </div>
        </Link>
      ))}
    </>
  )
}

export default BeerListPage
