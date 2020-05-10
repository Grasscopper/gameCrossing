grasscopper = User.create(user_name: "Grasscopper", email: "zelda@princess.com", password: "mouthwash")
flimflam = User.create(user_name: "Flimflam", email: "this@isntreal.com", password: "2complex4u")

##########################################################################################################################
bf2 = Game.create(
  title: "Star Wars Battlefront II",
  image: "https://i1.wp.com/metro.co.uk/wp-content/uploads/2020/04/swbf2-1920x1080-march-patch-rey.adapt_.crop16x9.1455w-4261.jpg?quality=90&strip=all&zoom=1&resize=644%2C362&ssl=1",
  start_date: "November 17, 2017",
  time_played: "200+ hours",
  progress: "I have played this game for so long. I love this game forever.",
  user: grasscopper
)
##########################################################################################################################

##########################################################################################################################
bf2List1 = List.create(
  title: "Unlock Darth Maul skin",
  image: "https://twinfinite.net/wp-content/uploads/2020/04/battlefront-2-old-master-darth-maul-skin.jpg",
  game: bf2
)

    bf2List1Point1 = Point.create(
      title: "Get 5000 eliminations as Darth Maul",
      list: bf2List1
    )

    bf2List1Point2 = Point.create(
      title: "Practice offline as Darth Maul",
      list: bf2List1
    )

    bf2List1Point3 = Point.create(
      title: "Play Co - Op",
      list: bf2List1
    )
###########################################################################################################################

###########################################################################################################################
bf2List2 = List.create(
  title: "Top Three Favorite Heroes",
  image: "https://vignette.wikia.nocookie.net/battlefront/images/5/56/Rey_profile.jpg/revision/latest?cb=20170706132333",
  game: bf2
)

    bf2List2Point1 = Point.create(
      title: "1. Rey",
      list: bf2List2
    )

    bf2List2Point2 = Point.create(
      title: "2. Obi - Wan Kenobi",
      list: bf2List2
    )

    bf2List2Point3 = Point.create(
      title: "3. Luke Skywalker",
      list: bf2List2
    )
##########################################################################################################################

##########################################################################################################################
bf2List3 = List.create(
  title: "Top Three Favorite Villains",
  image: "https://i.pinimg.com/originals/f7/6a/ff/f76aff6c01b3662e6cf35e2b7d862ac6.png",
  game: bf2
)

    bf2List3Point1 = Point.create(
      title: "1. Darth Vader",
      list: bf2List3
    )

    bf2List3Point2 = Point.create(
      title: "2. General Grevious",
      list: bf2List3
    )

    bf2List3Point3 = Point.create(
      title: "3. Kylo Ren",
      list: bf2List3
    )
###########################################################################################################################

###########################################################################################################################
ultimate = Game.create(
  title: "Super Smash Bros. Ultimate",
  image: "https://www.smashbros.com/assets_v2/img/top/hero05_en.jpg",
  start_date: "December 7, 2018",
  time_played: "50+ hours",
  progress: "I have unlocked all characters and I still love the game.",
  user: grasscopper
)
###########################################################################################################################

###########################################################################################################################
ultimateList1 = List.create(
  title: "Reach Elite Smash",
  image: "https://i.redd.it/upfzf7adss421.jpg",
  game: ultimate
)

    ultimateList1Point1 = Point.create(
      title: "Discover the top tier characters",
      list: ultimateList1
    )

    ultimateList1Point2 = Point.create(
      title: "Practice everyday",
      list: ultimateList1
    )

    ultimateList1Point3 = Point.create(
      title: "Play against level 9 CPUs",
      list: ultimateList1
    )
###########################################################################################################################

zero = Game.create(
  title: "Horizon Zero Dawn",
  image: "https://media.playstation.com/is/image/SCEA/horizon-zero-dawn-impact-poster-ps4-us-07feb17?$native_nt$",
  start_date: "Winter 2018",
  time_played: "20 hours",
  progress: "I haven't made much progress because this is such a big game, but I do love exploring this world very much. I usually get stuck on bosses.",
  user: flimflam
)

mgs = Game.create(
  title: "Metal Gear Solid: The Twin Snakes",
  image: "https://upyourgeek.com/wp-content/uploads/2018/03/wallpaper_metal_gear_solid_the_twin_snakes_01_1600.jpg",
  start_date: "When I was a kid",
  time_played: "50+ hours",
  progress: "I beat this game 3 or 4 times because I love it so much",
  user: flimflam
)
