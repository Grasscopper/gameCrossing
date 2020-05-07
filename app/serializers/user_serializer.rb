class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :user_name
  has_many :games
end
