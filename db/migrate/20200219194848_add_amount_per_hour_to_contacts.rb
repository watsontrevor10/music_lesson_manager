class AddAmountPerHourToContacts < ActiveRecord::Migration[6.0]
  def change
    add_column :contacts, :amount_per_hour, :float, :default => 0
  end
end
