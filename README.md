# README

Game Crossing - A helpful website for users to keep track of their video game collection

Visit us: https://gamecrossing.herokuapp.com/

Author: Justin Stransky
APIs:
https://rawg.io/
https://developers.google.com/chart

* Description
Utilized Devise for sign-in authentication, RAWG video games database API for featuring games, Google Chart API to graph game progress, Rails backend using ActiveRecord to handle data through PostgreSQL, and React frontend alongside fetch API to communicate with the Rails backend.

* Ruby version
ruby 2.6.5

* System dependencies
  active_model_serializers
  capybara
  database_cleaner
  devise
  dotenv-rails
  factory_bot
  foundation-rails (~> 6.5)
  jbuilder (~> 2.5)
  jquery-rails
  launchy
  listen (>= 3.0.5, < 3.2)
  pg (>= 0.18, < 2.0)
  pry-rails
  puma (~> 3.11)
  rails (~> 5.2.3)
  rspec-rails (= 3.8.2)
  sass-rails (~> 5.0)
  shoulda-matchers
  tzinfo-data
  uglifier (>= 1.3.0)
  valid_attribute
  web-console (>= 3.3.0)
  webpacker (~> 3.3)

* Configuration
Download or clone this repository from GitHub then run the following commands in the terminal to get the application running on your localhost.

bundle install
yarn install
bundle exec rake db:create
bundle exec rake db:migrate

* To reset database
bundle exec rake db:drop
bundle exec rake db:create
bundle exec rake db:migrate
 
