import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BeerDetailPage: React.FC = () => {
  let { id } = useParams()
  const [beer, setBeer] = useState({
    name: '',
    tagline: '',
    image_url: '',

    description: '',
    food_pairing: [],
  })
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
      .then((data) => data.json())
      .then((json) => {
        console.log(json[0])
        setBeer(json[0])
      })
  })
  return (
    <>
      <h1>Beerbylon Beers</h1>
      <p>{beer.name}</p>
      <p>{beer.tagline}</p>
      <p>{beer.description}</p>
      {beer.food_pairing.map((food) => (
        <p>{food}</p>
      ))}
    </>
  )
}

export default BeerDetailPage
