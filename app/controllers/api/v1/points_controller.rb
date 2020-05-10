class Api::V1::PointsController < ApplicationController
  def create
    point = Point.create(point_params)
    render json: point
  end

  protected

  def point_params
    params.require(:point).permit(:id, :title, :list_id)
  end
end