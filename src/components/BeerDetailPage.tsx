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
    <>
      <p>{name}</p>
      <p>{tagline}</p>
      <p>{description}</p>
      <p>{abv}</p>
      <p>{first_brewed}</p>
      <BeerImage src={image_url} />
      {food_pairing &&
        food_pairing.map((food, i) => <p key={`food-${i}`}>{food}</p>)}
    </>
  )
}

const BeerImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`

export default BeerDetailPage
