class Api::V1::PointsController < ApplicationController
  def create
    point = Point.create(point_params)
    render json: point
  end

  def destroy
    deletePoint = Point.find(params["id"])
    deletePoint.delete
    render json: deletePoint.list.points
  end

  def update
    point = Point.find(params["id"])
    point.update(point_params)
    render json: point.list.points.order(:id)
  end

  protected

  def point_params
    params.require(:point).permit(:id, :title, :list_id)
  end
end
