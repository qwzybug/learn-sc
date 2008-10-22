ActionController::Routing::Routes.draw do |map|
  map.with_options(:path_prefix => 'sc') do |m|
    m.resources :books
    m.resources :students
    m.resources :assignments
  end
end
