Rails.application.routes.draw do
  root to: 'doorman#index'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, controllers: {sessions: 'users/sessions', registrations: 'users/registrations', confirmations: 'users/confirmations' }

  get '/api/doormanprices', to: 'doorman#getPrices'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
