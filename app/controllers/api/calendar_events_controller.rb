class Api::CalendarEventsController < ApplicationController
  before_action :set_contact
  before_action :set_calendar, only: [:show, :update, :destroy]

  def index
    render json: @contact.calendar_events
  end

  def show
    render json: @contact.calendar_events.find(calendar_params)
  end

  def create
    calendar_event = @contact.calendar_events.new(calendar_params)
    if calendar_event.save
      render json: calendar_event
    else
      render json: invoice.errors, status: 422
    end
  end

  def update
    if @calendar.update(calendar_params)
      render json: @calendar
    else
      render json: @calendar.errors, status: 422
    end
  end

  def destroy
    @calendar.destroy
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
    @calendar = CalendarEvent.find(params[:id])
  end

  def set_contact
    @contact = Contact.find(params[:contact_id])
  end
end
