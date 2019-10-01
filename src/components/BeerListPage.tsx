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
    <>
      <Title>Beerbylon BAR</Title>
      <BeerListContainer>
        {beers.map((beer) => {
          const { id, name, abv, tagline, image_url } = beer
          return (
            <Link to={`/${id}`} key={`beer-${id}`}>
              <BeerItem>
                <BeerImage src={image_url} />
                <BeerTitle>{name}</BeerTitle>
                <BeerLabel>{tagline}</BeerLabel>
                <BeerLabel>{abv} (abv)</BeerLabel>
              </BeerItem>
            </Link>
          )
        })}
      </BeerListContainer>
    </>
  )
}

const Title = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #666;
  font-size: 22px;
  padding-left: 22px;
  background: #222;
  letter-spacing: 3px;
  　text-align: center;
`

const BeerListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
  background: #222;
`

const BeerItem = styled.div`
  width: 200px;
  height: 255px;
  border: 5px solid #333;
  border-radius: 15px;
  align-content: flex-start;
  padding: 15px;
  margin: 15px;
  &:hover {
    border: 5px solid #ffbc0c;
  }
`
const BeerTitle = styled.h1`
  color: #fff;
  font-size: 18px;
  text-decoration: underline #222;
  margin-bottom: 5px;
  width: 150px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const BeerLabel = styled.p`
  color: #ddd;
  text-decoration: underline #222;
  width: 150px;
  font-size: 12px;
  line-height: 15px;
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
