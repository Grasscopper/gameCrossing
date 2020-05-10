class Api::V1::GamesController < ApplicationController
  def index
    render json: {
      games: current_user.games,
      currentUser: current_user
    }
  end

  def show
    game = Game.find(params["id"])
    render json: {
      game: serialized_data(game, GameSerializer)
    }
  end

  def create
    game = Game.new(game_params)
    if game.save
      render json: game
    else
      render json: {error: game.errors.full_messages.to_sentence}
    end
  end

  def destroy
    deleteGame = Game.find(params["id"])
    deleteGame.delete
    render json: current_user.games
  end

  def serialized_data(data, serializer)
   ActiveModelSerializers::SerializableResource.new(data, serializer: serializer)
  end

  def authorize_user
    if !user_signed_in || !current_user.admin?
      raise ActionController::RoutingError.new("Not Found")
    end
  end

  protected

  def game_params
    params.require(:game).permit(:id, :title, :image, :start_date, :time_played, :progress, :user_id)
  end
end
