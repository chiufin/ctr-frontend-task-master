const getData = async (path?: String) => {
  const url = `https://api.punkapi.com/v2/${path}`
  const res = await fetch(url)
  return res.json()
}

export const getBeerList = () => getData('beers')
export const getBeerDetail = (id: String) => getData(`beers/${id}`)
