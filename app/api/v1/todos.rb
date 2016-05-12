module V1
  class Todos < Grape::API
    resource ":todos" do
      desc "return todo items."
      params do
        optional :limit, type: Integer, default: 5
      end
      get do
        Todo.order("date ASC").offset(0).limit(params[:limit])
      end

      desc "return todo items on specified month."
      params do
        requires :year, type: Integer
        requires :month, type: Integer
        optional :limit, type: Integer, default: 5
        optional :offset, type: Integer, default: 0
      end
      get ':year/:month' do
        Todo
          .by_month(params[:month], year: params[:year])
          .order("date ASC").offset(params[:offset]).limit(params[:limit])
      end
    end
  end
end
