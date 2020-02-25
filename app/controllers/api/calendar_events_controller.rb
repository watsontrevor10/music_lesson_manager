class Api::CalendarEventsController < ApplicationController
  before_action :set_calendar, only: [:show, :update, :destroy]
  before_action :set_contact

  def index
    
  end

  def show

  end

  def create

  end

  def update
  end

  def destroy
  end

  private 

  def calendar_params
      params.require(:calendar_event).permit(
        [
          :subject,
          :start_date,
          :end_date,
          :description,
          :location,
          :type,
        ]
      )
  end

  def set_calendar
    @calendar = Calendar.find(params[:id])
  end

  def set_contact
    @contact = Contact.find(params[:contact_id])
  end
end
