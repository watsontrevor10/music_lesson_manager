class CreateCalendarEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :calendar_events do |t|
      t.belongs_to :contacts, null: false, foreign_key: true
      t.string :subject
      t.datetime :start_date
      t.datetime :end_date
      t.text :description
      t.string :location
      t.string :type

      t.timestamps
    end
  end
end
