class ListSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :points
  belongs_to :game
  has_many :points
end
