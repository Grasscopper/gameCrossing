class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :start_date, :time_played, :progress
  has_many :lists
end
