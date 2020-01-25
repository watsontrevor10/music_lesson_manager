class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone
      t.string :email
      t.integer :age
      t.date :birthdate
      t.string :parent_name
      t.string :status
      t.string :type
      t.text :description
      t.belongs_to :studio, foreign_key: true

      t.timestamps
    end
  end
end
