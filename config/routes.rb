Rails.application.routes.draw do
  root 'homes#index'
  get '/games', to: 'homes#index'
  get '/games/:id', to: 'homes#index'
  get '/lists/:id', to: 'homes#index'
  get '/featuredgame', to: 'homes#index'
  get '/charts', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :show, :create, :destroy, :update] do
        collection { get 'featured' }
        collection { get 'chart' }
      end
      resources :lists, only: [:show, :create, :destroy, :update]
      resources :points, only: [:create, :destroy, :update]
    end
  end

  devise_for :users
end
