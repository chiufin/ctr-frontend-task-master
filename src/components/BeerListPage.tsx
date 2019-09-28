import React, { useState, useEffect } from 'react'

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
        <div style={{ border: '1px solid #000' }} key={`beer-${beer['id']}`}>
          <p>Name: {beer['name']}</p>
          <p>Tagline: {beer['tagline']}</p>
          {/* <img src={beer['image_url']} width='100' height='100'/> */}
          <div
            style={{
              background: `url(${beer['image_url']}) no-repeat`,
              width: '100px',
              height: '100px',
            }}
          ></div>
        </div>
      ))}
    </>
  )
}

export default BeerListPage
