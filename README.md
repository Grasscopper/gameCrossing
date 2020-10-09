# README

Game Crossing - A helpful website for users to keep track of their video game collection

Visit us: https://gamecrossing.herokuapp.com/

Author: Justin Stransky

Favicon: Mega Man from Capcom
Designed by	Akira Kitamura and Keiji Inafune

Images: https://pressstart.vip/assets
Thank you, Waldo!

APIs:

https://rawg.io/

https://developers.google.com/chart

* Description

Utilized Devise for sign-in authentication, RAWG video games database API for featuring games, Google Chart API to graph game progress, Rails backend using ActiveRecord to handle data through PostgreSQL, and React frontend alongside fetch API to communicate with the Rails backend.

* Ruby version

ruby 2.6.5

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

* To start app

In first tab, rails s
In second tab, npm start
