class Api::V1::ListsController < ApplicationController
  def show
    list = List.find(params["id"])
    render json: {
      list: serialized_data(list, ListSerializer)
    }
  end

  def create
    list = List.new(list_params)
    if list.save
      render json: list
    else
      render json: {error: list.errors.full_messages.to_sentence}
    end
  end

  def serialized_data(data, serializer)
   ActiveModelSerializers::SerializableResource.new(data, serializer: serializer)
  end

  protected

  def list_params
    params.require(:list).permit(:id, :title, :image, :game_id)
  end
end
