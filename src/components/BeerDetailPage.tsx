import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BeerImage from './BeerImage'
import { getBeerDetail } from 'apis'

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
      {food_pairing.map((food, i) => (
        <p key={`food-${i}`}>{food}</p>
      ))}
    </>
  )
}

export default BeerDetailPage
