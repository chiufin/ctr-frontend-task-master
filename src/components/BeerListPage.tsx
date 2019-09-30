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
              <BeerImage src={image_url} />
              <BeerLabel>{name}</BeerLabel>
              <BeerLabel>{abv}</BeerLabel>
              <BeerLabel>{tagline}</BeerLabel>
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
  background: #222;
`

const BeerItem = styled.div`
  width: 380px;
  height: 250px;
  border: 5px solid #333;
  align-content: flex-start;
  padding: 15px;
  margin: 15px;
  border-radius: 15px;
  &:hover {
    border: 5px solid #ffbc0c;
  }
`

const BeerLabel = styled.p`
  color: #fff;
  text-decoration: underline #222;
  margin-bottom: 2px;
  width: 340px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const BeerImage = styled.img`
  width: 150px;
  height: 150px;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  object-fit: contain;
  background: #fff;
`

export default BeerListPage
