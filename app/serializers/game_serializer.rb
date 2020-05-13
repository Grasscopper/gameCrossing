class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :start_date, :time_played, :progress, :status
  belongs_to :user
  has_many :lists
end
