import React, { useState, useEffect } from "react"

const FeaturedGame = (props) => {
  let [featured, setFeatured] = useState({
    name: "",
    platforms: [],
    genres: [],
    background_image: ""
  })
  const NintendoID = 16257

  useEffect(() => {
    fetch(`https://rawg-video-games-database.p.rapidapi.com/games?dates=2015-03-03,2020-12-31&developers=${NintendoID}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "485d6806b2msh89b002ffc5148c9p17fbaajsnb351e857eaa3"
      }
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      let games = body.results
      let randomIndex = Math.floor(Math.random() * games.length)
      let randomGame = games[randomIndex]
      setFeatured(randomGame)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  let platforms = ""
  let featuredPlatforms = featured.platforms.map((currentPlatform, index) => {
    if (index === featured.platforms.length - 1) {
      return (
        platforms += currentPlatform.platform.name
      )
    }
    return (
      platforms += `${currentPlatform.platform.name}, `
    )
  })

  let genres = ""
  let featuredGenres = featured.genres.map((currentGenre, index) => {
    if (index === featured.genres.length - 1) {
      return (
        genres += currentGenre.name
      )
    }
    return (
      genres += `${currentGenre.name}, `
    )
  })

  let metacritic = featured.metacritic
  if (metacritic === null) {
    metacritic = "N/A"
  }

  return (
    <div>
      <div className="grid-container game-tiles text-center featured">
        <h1>{featured.name}</h1>
        <h2>Metacritic Score: {metacritic}</h2>
        <p>{platforms}</p>
        <p>{genres}</p>
        <img src={featured.background_image} alt={featured.name} />
      </div>
      <div className="text-center">
      <p>Featured game source goes to RAWG Video Games Database API --- Thank you!</p>
      <a href="https://rawg.io/"><p>https://rawg.io/</p></a>
      </div>
    </div>
  )
}

export default FeaturedGame
