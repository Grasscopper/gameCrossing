class Api::V1::GamesController < ApplicationController
  before_action :authorize_user, except: [:index, :show, :create]

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

  def create
    game = Game.new(game_params)
    # user = User.find(user_params["id"])
    #
    # # game.update(user: user)
    # game.update(user_id: user.id)

    if game.save
      render json: game
    else
      render json: {error: game.errors.full_messages.to_sentence}
    end
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

  # def user_params
  #   params.require(:user).permit(:id)
  # end
end
