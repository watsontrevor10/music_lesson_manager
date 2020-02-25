class Api::InvoicesController < ApplicationController
  before_action :set_contact
  before_action :set_invoice, only: [:show, :update, :destroy]

  def index
    render json: @contact.invoices
  end

  def show
    render json: @contact.invoices.find(invoice_params)
  end

  def create
    invoice = @contact.invoices.new(invoice_params)
    if invoice.save
      render json: invoice
    else
      render json: invoice.errors, status: 422
    end
  end

  def update
    if @invoice.update(invoice_params)
      render json: @invoice
    else
      render json: @invoice.errors, status: 422
    end
  end

  def destroy
    @invoice.destroy
  end

  private 
  
  def set_invoice 
    @invoice = Invoice.find(params[:id])
  end

  def set_contact 
    @contact = Contact.find(params[:contact_id])
  end

  def invoice_params
    params.require(:invoice).permit(
      [
        :amount,
        :date_sent,
        :date_paid,
        :notes,
      ]
    )
  end

end
