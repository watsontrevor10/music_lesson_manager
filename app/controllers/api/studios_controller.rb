class Api::StudiosController < ApplicationController
  before_action :authenticate_user!
  before_action :set_studio, only: [:update]

  def index
    render json: current_user.studios.all
  end

  def show
    render json: @first_studio
  end

  def create
    studio = current_user.studios.new(studio_params)
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

  def first_studio
    @first_studio = Studio.first
  end

  def studio_params
    params.require(:studio).permit(:name)
  end
end
