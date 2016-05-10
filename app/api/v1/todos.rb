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
    end
  end
end
