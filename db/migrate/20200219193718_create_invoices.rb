class CreateInvoices < ActiveRecord::Migration[6.0]
  def change
    create_table :invoices do |t|
      t.belongs_to :contact, null: false, foreign_key: true
      t.float :amount
      t.date :date_sent
      t.date :date_paid
      t.text :notes

      t.timestamps
    end
  end
end
