class Api::V1::GamesController < ApplicationController
  def index
    render json: {
      games: Game.all,
      currentUser: current_user
    }
  end

  def show
    game = Game.find(params["id"])
    render json: {
      game: serialized_data(game, GameSerializer)
    }
  end

  def serialized_data(data, serializer)
   ActiveModelSerializers::SerializableResource.new(data, serializer: serializer)
  end
end
