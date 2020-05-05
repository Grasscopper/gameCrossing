class List < ApplicationRecord
  belongs_to :game
  has_many :points

  validates :title, presence: true
end
