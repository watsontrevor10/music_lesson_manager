Rails.application.routes.draw do
  
  namespace :api do
    get 'expenses/index'
    get 'expenses/show'
    get 'expenses/create'
    get 'expenses/update'
    get 'expenses/destroy'
  end
  namespace :api do
    resources :contacts
  end

  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
