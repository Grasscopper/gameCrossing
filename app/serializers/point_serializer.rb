class PointSerializer < ActiveModel::Serializer
  attributes :id, :title
  belongs_to :list
end
