import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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
    <BeerListContainer>
      {beers.map((beer) => {
        const { id, name, abv, tagline, image_url } = beer
        return (
          <Link to={`/${id}`} key={`beer-${id}`}>
            <BeerItem>
              <p>{name}</p>
              <p>{abv}</p>
              <p>Tagline: {tagline}</p>
              <BeerImage src={image_url} />
            </BeerItem>
          </Link>
        )
      })}
    </BeerListContainer>
  )
}

const BeerListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  background: #333;
`

const BeerItem = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #999;
  align-content: flex-start;
  padding: 10px;
  margin: 15px;
  &:hover {
    background: lightyellow;
  }
`

const BeerImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`

export default BeerListPage
