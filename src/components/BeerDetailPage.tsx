import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BeerImage from './BeerImage'

const BeerDetailPage: React.FC = () => {
  let { id } = useParams()
  const [beer, setBeer] = useState({
    name: '',
    tagline: '',
    abv: '',
    image_url: '',
    first_brewed: '',
    description: '',
    food_pairing: [],
  })

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
      .then((data) => data.json())
      .then((json) => {
        setBeer(json[0])
      })
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
      {food_pairing.map((food, i) => (
        <p key={`food-${i}`}>{food}</p>
      ))}
    </>
  )
}

export default BeerDetailPage
