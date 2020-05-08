require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:user_name) {|n| "User#{n}" }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

  factory :game do
    sequence(:title) {|n| "title#{n}"}
    sequence(:image) {|n| "image#{n}"}
    sequence(:start_date) {|n| "start_date#{n}"}
    sequence(:time_played) {|n| "time_played#{n}"}
    sequence(:progress) {|n| "progress#{n}"}
    association :user
  end
end
