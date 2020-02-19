class CreateExpenses < ActiveRecord::Migration[6.0]
  def change
    create_table :expenses do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :expense_category
      t.float :expense_amount
      t.date :date 
      t.string :purpose
      t.text :notes
      t.timestamps
    end
  end
end
