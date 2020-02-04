class Api::ContactsController < ApplicationController
  before_action :set_studio
  before_action :set_contact, only: [:show, :update, :destroy]

  def index
    render json: @studio.contacts
  end

  def show
    render json: @studio.contact.find(contact_params)
  end

  def create
    contact = @studio.contact.new(contact_params)
    if contact.save
      render json: contact
    else
      render json: contact.errors, status: 422      
    end
  end

  def update
    if @contact.update(contact_params)
      render json: @contact
    else
      render json: @contact.errors, status: 422
    end
  end

  def destroy
    @contact.destroy
  end

  private 

  def set_contact
    @contact = Contact.find(params[:id])
  end

  def set_studio
    @studio = Studio.find(params[:studio_id])
  end

  def contact_params
    params.require(:contact).permit(
      [
        :first_name, 
        :last_name, 
        :phone, 
        :email, 
        :age, 
        :birthdate, 
        :parent_name, 
        :status, 
        :type, 
        :description
      ])
  end
end
