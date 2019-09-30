import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getBeerDetail } from 'apis'

type BeerType = {
  name?: string
  tagline?: string
  abv?: string
  image_url?: string
  first_brewed?: string
  description?: string
  food_pairing?: string[]
}

const BeerDetailPage: React.FC = () => {
  let { id }: { id: string } = useParams()
  const [beer, setBeer] = useState<BeerType>({})

  useEffect(() => {
    let isSubscribed = true
    getBeerDetail(id).then((json) => {
      if (isSubscribed) {
        setBeer(json[0])
      }
    })

    return () => {
      isSubscribed = false
    }
  }, [id])

  let {
    name,
    tagline,
    abv,
    image_url,
    first_brewed,
    description,
    food_pairing,
  } = beer
  return (
    <BeerLayout>
      <BeerContainer>
        <BeerImage src={image_url} />
        <BeerLabel>{name}</BeerLabel>
        <BeerLabel>{tagline}</BeerLabel>
        <BeerLabel>{description}</BeerLabel>
        <BeerLabel>{abv}</BeerLabel>
        <BeerLabel>{first_brewed}</BeerLabel>
        {food_pairing &&
          food_pairing.map((food, i) => (
            <BeerLabel key={`food-${i}`}>{food}</BeerLabel>
          ))}
        <Button onClick={() => alert('Cheers!')}>Drink</Button>
      </BeerContainer>
    </BeerLayout>
  )
}

const BeerLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 100vh;
  background: #222;
`

const BeerContainer = styled.div`
  max-width: 600px;
  min-width: 400px;
  border: 5px solid #333;
  border-radius: 15px;
  padding: 15px;
`

const BeerLabel = styled.p`
  color: #fff;
  line-height: 150%;
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

const Button = styled.button`
  width: 150px;
  height: 30px;
  font-size: 15px;
  border-radius: 10px;
  background: #ffbc0c;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background: #ffca0b;
  }
`

export default BeerDetailPage
