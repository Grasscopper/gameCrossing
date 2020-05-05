class Game < ApplicationRecord
  belongs_to :user
  has_many :lists

  validates :title, presence: true
end
