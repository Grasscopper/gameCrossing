class Api::V1::ListsController < ApplicationController
  def show
    list = List.find(params["id"])
    render json: {
      list: serialized_data(list, ListSerializer)
    }
  end

  def serialized_data(data, serializer)
   ActiveModelSerializers::SerializableResource.new(data, serializer: serializer)
  end
end
