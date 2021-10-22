Rails.application.routes.draw do
  resources :users
  root to: 'users#index'
  # get '/new', to: 'users#new'
  # post '/new', to: 'users#create'
  # get '/edit', to: 'users#edit'
  # post '/edit', to: 'users#update'
  # patch '/edit', to: 'users#update'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
