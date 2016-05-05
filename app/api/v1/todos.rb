module V1
  class Todos < Grape::API
    resource ":todos" do
      desc "return todo items."
      get do
        Todo.all
      end
    end
  end
end
