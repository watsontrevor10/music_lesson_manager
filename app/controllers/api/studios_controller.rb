class Api::StudiosController < ApplicationController
  before_action :authenticate_user!
  before_action :set_studio, only: [:update]

  def index
    render json: current_user.studios 
  end

  def create
    studio = Studio.new(studio_params)
    if studio.save
      render json: studio
    else
      render json: studio.errors, status: 422
    end
  end

  def update 
    if @studio.update(studio_params)
      render json: @studio 
    else 
      render json: @studio.errors, status: 422
    end
  end

  private 

  def set_studio
    @studio = Studio.find(params[:id])
  end

  def studio_params
    params.require(:studio).permit(:name)
  end
end
