class Api::ExpensesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_expense, only: [:show, :update, :destroy]

  def index
    render json: current_user.expenses
  end

  def show
    render json: current_user.expenses.find(expense_params)
  end

  def create
    expense = current_user.expenses.new(expense_params)
    if expense.save
      render json: expense
    else
      render json: expense.errors, status: 422
    end
  end

  def update
    if @expense.update(expense_params)
      render json: @expense
    else
      render json: @expense.errors, status: 422
    end
  end

  def destroy
    @expense.destroy
  end

  private 

  def set_expense 
    @expense = Expense.find(params[:id])
  end

  def expense_params 
    params.require(:expense).permit(
      [
        :expense_category,
        :expense_amount,
        :date,
        :purpose,
        :notes,
      ]
    )
  end
end
