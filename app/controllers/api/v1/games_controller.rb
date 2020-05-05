class Api::V1::GamesController < ApplicationController
  def index
    render json: {
      games: Game.all,
      currentUser: current_user
    }
  end
end
