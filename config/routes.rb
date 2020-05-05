Rails.application.routes.draw do
  root 'homes#index'
  get '/games', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :games, only: [:index]
    end
  end

  devise_for :users
end
