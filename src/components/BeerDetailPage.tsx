import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getBeerDetail } from 'apis'
import { Link } from 'react-router-dom'

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
        <BeerTitle>{name}</BeerTitle>
        <BeerLabel>{tagline}</BeerLabel>
        <BeerLabel>{abv} (abv)</BeerLabel>
        <hr />
        <BeerLabel>Description: {description}</BeerLabel>
        <BeerLabel>Brewed Date: {first_brewed}</BeerLabel>
        {food_pairing &&
          food_pairing.map((food, i) => (
            <BeerLabel key={`food-${i}`}>{food}</BeerLabel>
          ))}
        <Button onClick={() => alert('Cheers!')}>Drink</Button>
        <Link to="/">
          <LinkButton>Back</LinkButton>
        </Link>
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
const BeerTitle = styled.h1`
  color: #fff;
  font-size: 22px;
  margin-bottom: 10px;
`

const BeerLabel = styled.p`
  color: #ddd;
  line-height: 150%;
  font-size: 12px;
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
  margin: 10px 10px 0 0;
  &:hover {
    background: #ffca0b;
  }
`

const LinkButton = styled(Button)`
  background: #555;
  color: #ddd;
  &:hover {
    background: #777;
  }
`

export default BeerDetailPage
