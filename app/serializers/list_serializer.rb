class ListSerializer < ActiveModel::Serializer
  attributes :title, :image, :points
  belongs_to :game
  has_many :points
end
