class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :start_date, :time_played, :progress
  belongs_to :user
  has_many :lists
end
