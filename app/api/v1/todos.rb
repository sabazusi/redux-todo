module V1
  class Todos < Grape::API
    resource ":todos" do
      desc "return todo items."
      params do
        optional :limit, type: Integer, default: 5
      end
      get do
        Todo.all
      end

      desc "return todo items on specified month."
      params do
        requires :year, type: Integer
        requires :month, type: Integer
        optional :limit, type: Integer, default: 5
      end
      get ':year/:month' do
        return params[:month]
      end
    end
  end
end
