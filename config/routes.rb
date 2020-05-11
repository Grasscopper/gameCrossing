Rails.application.routes.draw do
  root 'homes#index'
  get '/games', to: 'homes#index'
  get '/games/:id', to: 'homes#index'
  get '/lists/:id', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :show, :create, :destroy]
      resources :lists, only: [:show, :create, :destroy]
      resources :points, only: [:create]
    end
  end

  devise_for :users
end
